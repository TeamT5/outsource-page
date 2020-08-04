import React, { Component } from "react";
import PropTypes from "prop-types";

export default class IntersectionVisible extends Component {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    className: PropTypes.string,
    onHide: PropTypes.func,
    onIntersect: PropTypes.func.isRequired,
    onShow: PropTypes.func,
    options: PropTypes.shape({
      root: PropTypes.node,
      rootMargin: PropTypes.string,
      threshold: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.number),
      ]),
    }),
  };

  static defaultProps = {
    active: true,
    className: "intersection-visible-wrapper",
    onHide: () => null,
    onShow: () => null,
    onIntersect: () => null,
  };

  handleObserverUpdate = (entries) => {
    const { onIntersect, onShow, onHide } = this.props;
    const { intersectionRect } = entries[0];
    const { top, left, bottom, right } = intersectionRect;

    if ([top, bottom, left, right].some(Boolean) && onShow) {
      onShow(entries);
    } else if (onHide) {
      onHide(entries);
    }

    onIntersect(entries);
  };

  startObserving() {
    this.observer.observe(this.node);
  }

  stopObserving() {
    this.observer.unobserve(this.node);
  }

  componentDidMount() {
    const { options } = this.props;
    this.observer = new IntersectionObserver(
      this.handleObserverUpdate,
      options
    );

    if (this.props.active) {
      this.startObserving();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.active && !prevProps.active) {
      this.startObserving();
    }

    if (!this.props.active && prevProps.active) {
      this.stopObserving();
    }
  }

  componentWillUnmount() {
    this.observer.disconnect();
  }

  render() {
    const { className } = this.props;
    return (
      <div className={className} ref={(node) => (this.node = node)}>
        {this.props.children}
      </div>
    );
  }
}
