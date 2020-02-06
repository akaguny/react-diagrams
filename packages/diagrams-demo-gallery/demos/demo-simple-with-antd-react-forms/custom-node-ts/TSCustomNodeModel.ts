import {DefaultPortModel, DefaultNodeModel} from '@projectstorm/react-diagrams';
import { BaseModelOptions } from '@projectstorm/react-canvas-core';
import {RightAnglePortModel} from "../../demo-right-angles-routing";

export interface TSCustomNodeModelOptions extends BaseModelOptions {
	text?: string;
}

export class TSCustomNodeModel extends DefaultNodeModel {
	text: string;

	constructor(options: TSCustomNodeModelOptions = {}) {
		super({
			...options,
			type: 'ts-custom-node'
		});
		this.text = options.text || 'Новый виджет';

		this.addPort(
			new RightAnglePortModel({
				in: true,
				name: 'in'
			})
		);
		this.addPort(
			new RightAnglePortModel({
				in: false,
				name: 'out'
			})
		);
	}

	serialize() {
		return {
			...super.serialize(),
			text: this.text,
		};
	}

	deserialize(event): void {
		super.deserialize(event);
		this.text = event.data.text;
	}
}
