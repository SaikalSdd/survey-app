import React, { Component } from 'react';
import zxcvbn from 'zxcvbn';
import "../assets/style.css";

class PasswordStrengthMeter extends Component {

  createPasswordLabel = (result) => {
    switch (result.score) {
      case 0:
        return 'Легкий';
      case 1:
        return 'Легкий';
      case 2:
        return 'Средний';
      case 3:
        return 'Сильный';
      
    }
  }

  render() {
    const { password } = this.props;
    const testedResult = zxcvbn(password);
    return (
      <div className="password-strength-meter">
        <progress
          className={`password-strength-meter-progress strength-${this.createPasswordLabel(testedResult)}`}
          value={testedResult.score}
          max="3"
        />
        <br />
        <label
          className="password-strength-meter-label"
        >
          {password && (
            <>
              <strong>{this.createPasswordLabel(testedResult)}</strong>
            </>
          )}
        </label>
      </div>
    );
  }
}


export default PasswordStrengthMeter;