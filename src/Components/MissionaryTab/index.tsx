import React from 'react';
import { Button, createStyles, Theme, Typography } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: '25%',
            paddingRight: '25%'
        },
        color: {
            color: 'green',
        },
        color2: {
            color: 'black'
        },
        descriptionWrapper: {
            marginBottom: 15
        },
        inputsWrapper: {
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 15
        },
        inputWrapper: {
            marginRight: 10,
        },
        submitWrapper: {
            marginBottom: 15
        },
        messageWrapper: {
            marginBottom: 15
        }
    }),
);

// function disablePrevDates(startDate) {
//     const startSeconds = Date.parse(startDate);
//     return (date) => {
//       return Date.parse(date) < startSeconds;
//     }
//   }

export default function MissionaryTab() {

    const classes = useStyles();

    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date('2021-01-01T21:11:54'),
    );

    function handleDateChange(date: Date | null) {
        setSelectedDate(date);
    }
    const [correct, showCorrect] = React.useState(false)
    const [none, noneCorrect] = React.useState(false)

    const correctAnswers = new Date('2021-01-12T21:11:00');
    if (selectedDate !== null) {
        var dateInput = selectedDate;
    };


    const checkAnswers = () => {
        if (correctAnswers !== dateInput) {
            noneCorrect(true)
        }
        if (correctAnswers.toString() === dateInput.toString()) {
            noneCorrect(false)
            showCorrect(true)
        }
    }

    return (
        <div className={classes.container}>
            <div className={classes.descriptionWrapper}>
                <Typography align='center'>Use the clues to find out when “my missionary” will arrive home:</Typography>
            </div>
            <div className={classes.inputsWrapper}>
                <div className={classes.inputWrapper}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            clearable
                            value={selectedDate}
                            placeholder="01/01/2021"
                            onChange={handleDateChange}
                            minDate={new Date()}
                            format="MM/dd/yyyy"
                            disabled={correct}
                            // shouldDisableDate={disablePrevDates(startDate)}
                            InputProps={correct === true ?
                                { className: classes.color } : { className: classes.color2 }
                            }
                            inputProps={correct === true ?
                                { readOnly: true } : { readOnly: false }
                            }

                        />
                        {/* {disabled= {correct === true ? true : false}} */}
                    </MuiPickersUtilsProvider>
                </div>

                {!correct && (
                    <Button onClick={checkAnswers} variant="contained" size='large' color="secondary" >SUBMIT</Button>
                )}

            </div>
            <div className={classes.messageWrapper}>
                {none && (
                    <Typography align='center'>That's not right. Please try again</Typography>
                )}

                {correct && (
                    <div>
                        <Typography variant='h3' align='center' style={{ marginBottom: 15 }}>CORRECT!</Typography>
                        <Typography align='center'>You may now open the <strong>Manilla Folder</strong> to receive one of the words for the final clue.</Typography>
                    </div>
                )}
            </div>
        </div>
    );

}