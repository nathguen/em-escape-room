import React from 'react';
import { Button } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


export default function MissionaryTab() {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date('2021-01-01T21:11:54'),
    );

    function handleDateChange(date: Date | null) {
        setSelectedDate(date);
    }
    const [correct, showCorrect] = React.useState(false)
    const [none, noneCorrect] = React.useState(false)

    const correctAnswers = "2021-01-12";
    var input = 0;





    // const checkAnswers = () => {
    //     console.log(allInput);
    //     var splitAnswers = correctAnswers.split('');
    //     var i = 0;
    //     var countCorrect = 0;
    //     splitAnswers.forEach(e => {
    //         if (e === allInput[i]) {
    //             countCorrect++;

    //         }
    //         i++;
    //         if (countCorrect > 0 && countCorrect < 4) {
    //             tryAgain(true)
    //             noneCorrect(false)
    //         }

    //     })
    //     if (correctAnswers === allInput) {
    //         tryAgain(false)
    //         noneCorrect(false)
    //         showCorrect(true)
    //     }
    //     if (countCorrect === 0) {
    //         noneCorrect(true)
    //     }
    // }

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
                />

            </MuiPickersUtilsProvider>

            {!correct && (
                <Button variant="contained" size='large' color="secondary" >
                    SUBMIT
            </Button>
            )}

            {none && (
                <p>Sorry, none of those are right. Please try again</p>
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