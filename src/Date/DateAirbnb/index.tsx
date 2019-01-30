import moment from "moment";
import React, { Component } from "react";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

moment.locale("pt-br");

export class DatePicker extends Component {
  public state = {
    endDate: null,
    focusedInput: null,
    startDate: null,
  };

  // public setDate = (startDate: moment.Moment | null, endDate: moment.Moment | null) => {
  //   this.setState({ startDate, endDate });
  // }

  // public setFocus = (focusedInput: any) => {
  //   this.setState({ focusedInput });
  // }

  public render() {
    return (
      <DateRangePicker
        startDate={this.state.startDate}
        startDateId="your_unique_start_date_id"
        endDate={this.state.endDate}
        endDateId="your_unique_end_date_id"
        onDatesChange={(startDate, endDate) => this.setState({ startDate, endDate })}
        focusedInput={this.state.focusedInput}
        onFocusChange={(focusedInput) => this.setState({ focusedInput })}
      />
    );
  }
}
