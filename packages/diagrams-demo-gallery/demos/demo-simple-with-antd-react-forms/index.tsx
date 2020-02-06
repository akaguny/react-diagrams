import createEngine, {
	DiagramModel,
	RightAngleLinkFactory
} from '@projectstorm/react-diagrams';
import * as React from 'react';
import './main.css';
import {CanvasWidget} from '@projectstorm/react-canvas-core';
import {DemoCanvasWidget} from '../helpers/DemoCanvasWidget';
import {TSCustomNodeFactory} from './custom-node-ts/TSCustomNodeFactory';
import {TSCustomNodeModel} from './custom-node-ts/TSCustomNodeModel';

export default () => {
	//1) setup the diagram engine
	const engine = createEngine();

	// Фабрика нужна для распознавания TSCustomNodeModel и RightAngleLinkFactory
	engine.getNodeFactories().registerFactory(new TSCustomNodeFactory());
	engine.getLinkFactories().registerFactory(new RightAngleLinkFactory());

	//2) setup the diagram model
	const model = new DiagramModel();

	const firstCondition = new TSCustomNodeModel({text: 'Условие 1!'});
	firstCondition.setPosition(10, 50);
	const secondCondition = new TSCustomNodeModel({text: 'Условие 2!'});
	secondCondition.setPosition(600, 400);
	const thirdCondition = new TSCustomNodeModel({text: 'Условие 5!'});
	thirdCondition.setPosition(600, 600);

	// link the ports
	const firstConditionPortOut = firstCondition.getOutPorts()[0];
	const secondConditionPortIn = secondCondition.getInPorts()[0];
	const thirdConditionPortIn = thirdCondition.getInPorts()[0];

	const fromFirstToSecondLink = firstConditionPortOut.link(secondConditionPortIn);
	const fromFirstToThirdLink = firstConditionPortOut.link(thirdConditionPortIn);

	//4) add the models to the root graph
	model.addAll(firstCondition, secondCondition, thirdCondition,
		fromFirstToSecondLink,
		fromFirstToThirdLink);

	//5) load model into engine
	engine.setModel(model);

	//6) render the diagram!
	return (
		<DemoCanvasWidget>
			<CanvasWidget engine={engine}/>
		</DemoCanvasWidget>
	);
};
