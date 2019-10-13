import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, Theme, makeStyles, createStyles } from '@material-ui/core';
// import { createMuiTheme } from '@material-ui/core/styles'



interface State {
    input: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
        },
        textFieldText: {
            textTransform: 'uppercase'
        },
        color: {
            color: 'white',
            background: 'green',
            fontWeight: 'bold'
        },
        color2: {
            color: 'black'
        }
    }),
);
// const theme = createMuiTheme({
//     palette: {
//       action: {
//         disabledBackground: 'green'
//       }
//     }
//   });


export default function PianoTab() {

    const classes = useStyles();

    const [value1, setValue1] = React.useState<string>('')
    const [value2, setValue2] = React.useState<string>('')
    const [value3, setValue3] = React.useState<string>('')
    const [value4, setValue4] = React.useState<string>('')
    const [value5, setValue5] = React.useState<string>('')
    const [value6, setValue6] = React.useState<string>('')
    const [value7, setValue7] = React.useState<string>('')

    let input1: HTMLInputElement | null = null;
    let input2: HTMLInputElement | null = null;
    let input3: HTMLInputElement | null = null;
    let input4: HTMLInputElement | null = null;
    let input5: HTMLInputElement | null = null;
    let input6: HTMLInputElement | null = null;
    let input7: HTMLInputElement | null = null;

    const [attemptMade, setAttemptMade] = React.useState(false);

    const correctAnswers: string[] = ['G', 'A', 'E', 'D', 'F', 'B', 'C'];

    const isValueCorrect = (answerNum: number): boolean => {
        let input: string = '';
        let answer: string = '';

        switch (answerNum) {
            case 1:
                input = value1;
                answer = correctAnswers[0];
                break;

            case 2:
                input = value2;
                answer = correctAnswers[1];
                break;

            case 3:
                input = value3;
                answer = correctAnswers[2];
                break;

            case 4:
                input = value4;
                answer = correctAnswers[3];
                break;

            case 5:
                input = value5;
                answer = correctAnswers[4];
                break;

            case 6:
                input = value6;
                answer = correctAnswers[5];
                break;

            default:
                input = value7;
                answer = correctAnswers[6];
        }

        return input.toLowerCase() === answer.toLowerCase();
    };

    const updateAllAnswers = () => {
        if (input1) {
            setValue1(input1.value.toUpperCase());
        }
        if (input2) {
            setValue2(input2.value.toUpperCase());
        }
        if (input3) {
            setValue3(input3.value.toUpperCase());
        }
        if (input4) {
            setValue4(input4.value.toUpperCase());
        }
        if (input5) {
            setValue5(input5.value.toUpperCase());
        }
        if (input6) {
            setValue6(input6.value.toUpperCase());
        }
        if (input7) {
            setValue7(input7.value.toUpperCase());
        }

        if (!attemptMade) {
            setAttemptMade(true);
        }
    };

    const numberOfCorrectAnswers = correctAnswers.reduce((num, correctAnswer, index) => {
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

            case 5:
                inputValue = value6;
                break;

            case 6:
                inputValue = value7;
                break;
        }

        if (inputValue.toLowerCase() === correctAnswer.toLowerCase()) {
            num++;
        }
        return num;
    }, 0);

    return (
        <div className={classes.container} >
            <TextField
                id="#1"
                label="#1"
                placeholder="Type here"
                className={classes.textField}
                inputRef={el => input1 = el}
                margin="normal"
                variant="filled"
                inputProps={{
                    className: `${isValueCorrect(1) ? classes.color : classes.color2} ${classes.textFieldText}`,
                    disabled: isValueCorrect(1),
                }}
            />

            <TextField
                id="filled-name"
                label="#2"
                placeholder="Type here"
                className={classes.textField}
                inputRef={el => input2 = el}
                margin="normal"
                variant="filled"
                inputProps={{
                    className: `${isValueCorrect(2) ? classes.color : classes.color2} ${classes.textFieldText}`,
                    disabled: isValueCorrect(2),
                }}
            />

            <TextField
                id="filled-name"
                label="#3"
                placeholder="Type here"
                className={classes.textField}
                inputRef={el => input3 = el}
                margin="normal"
                variant="filled"
                inputProps={{
                    className: `${isValueCorrect(3) ? classes.color : classes.color2} ${classes.textFieldText}`,
                    disabled: isValueCorrect(3),
                }}
            />

            <TextField
                id="filled-name"
                label="#4"
                placeholder="Type here"
                className={classes.textField}
                inputRef={el => input4 = el}
                margin="normal"
                variant="filled"
                inputProps={{
                    className: `${isValueCorrect(4) ? classes.color : classes.color2} ${classes.textFieldText}`,
                    disabled: isValueCorrect(4),
                }}
            />

            <TextField
                id="filled-name"
                label="#5"
                placeholder="Type here"
                className={classes.textField}
                inputRef={el => input5 = el}
                margin="normal"
                variant="filled"
                inputProps={{
                    className: `${isValueCorrect(5) ? classes.color : classes.color2} ${classes.textFieldText}`,
                    disabled: isValueCorrect(5),
                }}
            />

            <TextField
                id="filled-name"
                label="#6"
                placeholder="Type here"
                className={classes.textField}
                inputRef={el => input6 = el}
                margin="normal"
                variant="filled"
                inputProps={{
                    className: `${isValueCorrect(6) ? classes.color : classes.color2} ${classes.textFieldText}`,
                    disabled: isValueCorrect(6),
                }}
            />

            <TextField
                id="filled-name"
                label="#7"
                placeholder="Type here"
                className={classes.textField}
                inputRef={el => input7 = el}
                margin="normal"
                variant="filled"
                inputProps={{
                    className: `${isValueCorrect(7) ? classes.color : classes.color2} ${classes.textFieldText}`,
                    disabled: isValueCorrect(7),
                }}
            />

            {numberOfCorrectAnswers < correctAnswers.length && (
                <Button onClick={updateAllAnswers} variant="contained" size='large' color="secondary" >
                    SUBMIT
                </Button>
            )}

            {attemptMade && (
                <div>
                    {numberOfCorrectAnswers > 0 && numberOfCorrectAnswers < correctAnswers.length && (
                        <p>Some of your answers were right! Just gotta fix a few.</p>
                    )}

                    {numberOfCorrectAnswers === 0 && (
                        <p>Sorry, none of those are right. Please try again</p>
                    )}

                    {numberOfCorrectAnswers === correctAnswers.length && (
                        <div>
                            <h1>CORRECT!</h1>
                            <p>You may now open the <strong>Blowfish Shoe Box</strong> to receive one of the words for the final clue.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}