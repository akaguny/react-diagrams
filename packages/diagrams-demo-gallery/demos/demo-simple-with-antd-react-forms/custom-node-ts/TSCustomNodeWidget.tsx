import * as React from 'react';
import { DiagramEngine, PortWidget } from '@projectstorm/react-diagrams-core';
import { TSCustomNodeModel } from './TSCustomNodeModel';
import WrappedRegistrationForm from '../form'

export interface TSCustomNodeWidgetProps {
	node: TSCustomNodeModel;
	engine: DiagramEngine;
}

export interface TSCustomNodeWidgetState {}

export class TSCustomNodeWidget extends React.Component<TSCustomNodeWidgetProps, TSCustomNodeWidgetState> {
	constructor(props: TSCustomNodeWidgetProps) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="custom-node">
				<PortWidget className="circle-port circle-port--left" engine={this.props.engine} port={this.props.node.getPort('in')}>
				</PortWidget>
				<PortWidget className="circle-port circle-port--right" engine={this.props.engine} port={this.props.node.getPort('out')}>
				</PortWidget>
				<div className="custom-node-color" style={{ backgroundColor: this.props.node.color }} />
<div className="custom-form">
{this.props.node.text}
<WrappedRegistrationForm />
</div>
			</div>
		);
	}
}
