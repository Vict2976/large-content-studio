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
        <button className="btn btn-ghost" onClick={this.toggle}>
          {this.state.expanded ? 'Hide' : 'Show'} stats
        </button>
        {this.state.expanded && (
          <p>
            {/* Same value as --color-accent-a, hardcoded before the token existed. */}
            <strong style={{ color: '#8b5cf6' }}>{totalGenerations}</strong> generations this month
          </p>
        )}
      </div>
    );
  }
}
