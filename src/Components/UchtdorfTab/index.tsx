import React from 'react';
import { TextField, Button, makeStyles, Theme, createStyles } from '@material-ui/core';


interface State {
    input: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
        },
        color: {
            color: 'white',
            background: 'green'
        },
        color2: {
            color: 'black'
        },
        color3: {
            backgroundColor: 'green'
        },
        inputsWrapper: {
            display: 'flex',
            flexWrap: 'wrap',
            marginBottom: 15
        },
        submitWrapper: {
            marginBottom: 15
        },
        messageWrapper: {
            marginBottom: 15
        }
    }),
);

export default function UchtdorfTab() {
    const classes = useStyles();

    let input1: HTMLInputElement | null = null;
    let input2: HTMLInputElement | null = null;
    let input3: HTMLInputElement | null = null;
    let input4: HTMLInputElement | null = null;
    let input5: HTMLInputElement | null = null;

    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');
    const [value3, setValue3] = React.useState('');
    const [value4, setValue4] = React.useState('');
    const [value5, setValue5] = React.useState('');

    const [attemptMade, setAttemptMade] = React.useState(false);

    const correctAnswers = [
        'TREE',
        'FAN',
        'SPEAR',
        'SNAKE',
        'ROPE'
    ];


    const numberOfCorrectAnswers = correctAnswers.reduce((num, answer, index) => {
        let inputValue: string = '';

        switch (index) {
            case 0:
                inputValue = value1;
                break;

            case 1:
                inputValue = value2;
                break;

            case 2:
                inputValue = value3;
                break;

            case 3:
                inputValue = value4;
                break;

            case 4:
                inputValue = value5;
                break;
        }

        if (inputValue.toLowerCase() === answer.toLowerCase()) {
            num++;
        }

        return num;
    }, 0);

    const setAllValues = () => {
        if (input1) {
            setValue1(input1.value);
        }
        if (input2) {
            setValue2(input2.value);
        }
        if (input3) {
            setValue3(input3.value);
        }
        if (input4) {
            setValue4(input4.value);
        }
        if (input5) {
            setValue5(input5.value);
        }

        if (!attemptMade) {
            setAttemptMade(true);
        }
    };

    const isInputCorrect = (inputNum: number) => {
        let inputValue: string = '';
        let answer: string = '';

        switch (inputNum) {
            case 1:
                inputValue = value1;
                answer = correctAnswers[0];
                break;

            case 2:
                inputValue = value2;
                answer = correctAnswers[1];
                break;

            case 3:
                inputValue = value3;
                answer = correctAnswers[2];
                break;

            case 4:
                inputValue = value4;
                answer = correctAnswers[3];
                break;

            case 5:
                inputValue = value5;
                answer = correctAnswers[4];
                break;
        }

        return inputValue.toLowerCase() === answer.toLowerCase();
    };

    return (
        <div>
            <div className={classes.inputsWrapper} >
                <TextField
                    id="#1"
                    label="#1"
                    placeholder="Type here"
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
                    inputRef={el => input1 = el}
                    inputProps={{
                        className: isInputCorrect(1) ? classes.color : classes.color2,
                        readOnly: isInputCorrect(1),
                        maxLength: 10
                    }}
                />

                <TextField
                    id="filled-name"
                    label="#2"
                    placeholder="Type here"
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
                    inputRef={el => input2 = el}
                    inputProps={{
                        className: isInputCorrect(2) ? classes.color : classes.color2,
                        readOnly: isInputCorrect(2),
                        maxLength: 10
                    }}
                />

                <TextField
                    id="filled-name"
                    label="#3"
                    placeholder="Type here"
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
                    inputRef={el => input3 = el}
                    inputProps={{
                        className: isInputCorrect(3) ? classes.color : classes.color2,
                        readOnly: isInputCorrect(3),
                        maxLength: 10
                    }}
                />

                <TextField
                    id="filled-name"
                    label="#4"
                    placeholder="Type here"
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
                    inputRef={el => input4 = el}
                    inputProps={{
                        className: isInputCorrect(4) ? classes.color : classes.color2,
                        readOnly: isInputCorrect(4),
                        maxLength: 10
                    }}
                />

                <TextField
                    id="filled-name"
                    label="#5"
                    placeholder="Type here"
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
                    inputRef={el => input5 = el}
                    inputProps={{
                        className: isInputCorrect(5) ? classes.color : classes.color2,
                        readOnly: isInputCorrect(5),
                        maxLength: 10
                    }}
                />
            </div>

            <div className={classes.submitWrapper}>
                {numberOfCorrectAnswers < correctAnswers.length && (
                    <Button onClick={setAllValues} variant="contained" size='large' color="secondary" >
                        SUBMIT
                </Button>
                )}
            </div>

            {attemptMade && (
                <div className={classes.messageWrapper}>
                    {numberOfCorrectAnswers > 0 && numberOfCorrectAnswers < correctAnswers.length && (
                        <p>Some of your answers were right! Just gotta fix a few.</p>
                    )}

                    {numberOfCorrectAnswers === 0 && (
                        <p>Sorry, none of those are right. Please try again</p>
                    )}

                    {numberOfCorrectAnswers === correctAnswers.length && (
                        <div>
                            <h1>CORRECT!</h1>
                            <p>You may now open the <strong>Apple Spice Box</strong> to receive one of the words for the final clue.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
