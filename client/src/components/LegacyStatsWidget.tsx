import { Component } from 'react';

interface Props {
  totalGenerations: number;
}

interface State {
  expanded: boolean;
}

// Predates the hooks-based rewrite of the rest of this app; kept as-is because it still works.
export class LegacyStatsWidget extends Component<Props, State> {
  state: State = { expanded: false };

  toggle = (): void => {
    this.setState((s) => ({ expanded: !s.expanded }));
  };

  render() {
    const { totalGenerations } = this.props;
    return (
      <div className="stats-widget">
        <button onClick={this.toggle}>{this.state.expanded ? 'Hide' : 'Show'} stats</button>
        {this.state.expanded && <p>{totalGenerations} generations this month</p>}
      </div>
    );
  }
}
