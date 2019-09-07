import React from 'react';
import { Button } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

export default function MissionaryTab() {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date('2021-01-01T21:11:54'),
    );

    function handleDateChange(date: Date | null) {
        setSelectedDate(date);
    }
    const [correct, showCorrect] = React.useState(false)
    const [none, noneCorrect] = React.useState(false)

    const correctAnswers = new Date('2021-01-12T21:11:00');
    if(selectedDate !== null) {
        var dateInput = selectedDate;
    };


    const checkAnswers = () => {
        if(correctAnswers !== dateInput) {
            noneCorrect(true)
        }
        if (correctAnswers.toString() === dateInput.toString()) {
            noneCorrect(false)
            showCorrect(true)
        }
    }

    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    clearable
                    value={selectedDate}
                    placeholder="01/01/2021"
                    onChange={handleDateChange}
                    minDate={new Date()}
                    format="MM/dd/yyyy"
                    disabled= {correct === true ? true : false}
                />
            </MuiPickersUtilsProvider>

            {!correct && (
                <Button onClick={checkAnswers} variant="contained" size='large' color="secondary" >
                    SUBMIT
            </Button>
            )}

            {none && (
                <p>That's not right. Please try again</p>
            )}

            {correct && (
                <div>
                    <h1>CORRECT!</h1>
                    <p>You may now open the _____________ to receive one of the words for the final clue.</p>
                </div>
            )}
        </div>
    );

}