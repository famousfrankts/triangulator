import React from 'react';

import { connect } from 'react-redux';
import * as actions from '../store/actions';

class Triangulator extends React.Component {
  constructor(props) {
    super(props);
    this.triangle = props.triangle;
  }

  setSide(side, value) {
    const { props, triangle } = this;

    triangle[side] = value;

    if (value > 0) {
      props.setTriangle({
        a: triangle.a,
        b: triangle.b,
        c: triangle.c,
      });
    }
  }

  renderResult() {
    const { props } = this;

    if (props.triangle.invalid) {
      return (
        <div data-ts="Note" className="invalid">
          <i className="ts-icon-error"></i>
          <p>Silly you. Don&#39;t you know that the longest side must be shorter than the other two sides combined?!</p>
        </div>
      )
    }

    return (
      <div data-ts="Note">
        <i className="ts-icon-info"></i>
        <p>After careful consideration, we have determined that the triangle is {props.triangle.type}!</p>
      </div>
    )
  }

  render() {
    const { props } = this;

    return (
      <div className="triangulator">
        <section className="description">
          <h1>Triangulator</h1>
          <p>Welcome to the triangulator! The Triangulator is capable of many things. Predicting the future. Changing the spin of the earth. Calculating the meaning of life. But most importantly, figuring out what type of triangle you get by declaring its 3 sides lengths:</p>
        </section>

        <form data-ts="Form">
          <fieldset>
            <label className={ this.invalid ? 'ts-error' : '' }>
              <span>Side A</span>
              <input type="number" min="1" value={props.triangle.a} onChange={(e) => this.setSide('a', e.target.value)}/>
            </label>
          </fieldset>

          <fieldset>
            <label className={ this.invalid ? 'ts-error' : '' }>
              <span>Side B</span>
              <input type="number" min="1" value={props.triangle.b} onChange={(e) => this.setSide('b', e.target.value)}/>
            </label>
          </fieldset>

          <fieldset>
            <label className={ this.invalid ? 'ts-error' : '' }>
              <span>Side C</span>
              <input type="number" min="1" value={props.triangle.c} onChange={(e) => this.setSide('c', e.target.value)}/>
            </label>
          </fieldset>
        </form>

        {this.renderResult()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { triangle } = state;
  return { triangle };
};

export default connect(mapStateToProps, actions)(Triangulator);
