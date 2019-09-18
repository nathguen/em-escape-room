import React from 'react';
import { TextField, Button, makeStyles, Theme, createStyles } from '@material-ui/core';


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
        color: {
            color: 'green',
        },
        color2: {
            color: 'black'
        },
        color3: {
            backgroundColor: 'green'
        }
    }),
);

export default function UchtdorfTab() {
    const classes = useStyles();

    const [value1, setValue1] = React.useState<State>({ input: '' })
    const [value2, setValue2] = React.useState<State>({ input: '' })
    const [value3, setValue3] = React.useState<State>({ input: '' })
    const [value4, setValue4] = React.useState<State>({ input: '' })
    const [value5, setValue5] = React.useState<State>({ input: '' })

    const [correct, showCorrect] = React.useState(false)
    const [again, tryAgain] = React.useState(false)
    const [none, noneCorrect] = React.useState(false)

    const correctAnswers = [
        'TREE',
        'FAN',
        'SPEAR',
        'SNAKE',
        'ROPE'
    ];
    var allInput = [value1.input, value2.input, value3.input, value4.input, value5.input];


    const handleChange1 = (input: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue1({ ...value1, [input]: event.target.value.toUpperCase() });
    };
    const handleChange2 = (input: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue2({ ...value2, [input]: event.target.value.toUpperCase() });
    };
    const handleChange3 = (input: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue3({ ...value3, [input]: event.target.value.toUpperCase() });
    };
    const handleChange4 = (input: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue4({ ...value4, [input]: event.target.value.toUpperCase() });
    };
    const handleChange5 = (input: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue5({ ...value5, [input]: event.target.value.toUpperCase() });
    };

    const checkAnswers = () => {
        console.log(allInput)
        var i = 0;
        var countCorrect = 0;
        correctAnswers.forEach(e => {
            if (e === allInput[i]) {
                countCorrect++;

            }
            i++;
            if (countCorrect > 0 && countCorrect < 5) {
                tryAgain(true)
                noneCorrect(false)
            }
        })
        if (countCorrect === 5) {
            tryAgain(false)
            noneCorrect(false)
            showCorrect(true)
        }

        if (countCorrect === 0) {
            noneCorrect(true)
        }
    }

    // var i = 0;
    // const inputProps = {
    //     splitAnswers.forEach(e => {
    //         if(value1.input === correctAnswers[0] && again === true || correct === true) {
    //             {className: classes.color}
    //         }
    //         i++;
    //     }),
    //     readOnly: true
    //   };


    const isValueCorrect = (num: number) => {
        var i = 0;
        const correctArray = correctAnswers.map(e => {
            if ((allInput[i] === correctAnswers[i] && again === true) || correct === true) {
                i++;
                return true;
            }
            i++;
        })
        return correctArray[num];
    }


    return (
        <div className={classes.container} >
            <TextField
                id="#1"
                label="#1"
                placeholder="Type here"
                className={classes.textField}
                value={value1.input}
                onChange={handleChange1('input')}
                margin="normal"
                variant="filled"
                InputProps={{
                    className: isValueCorrect(0) ? classes.color : classes.color2,
                    readOnly: isValueCorrect(0)
                }}
            />

            <TextField
                id="filled-name"
                label="#2"
                placeholder="Type here"
                className={classes.textField}
                value={value2.input}
                onChange={handleChange2('input')}
                margin="normal"
                variant="filled"
                InputProps={{
                    className: isValueCorrect(1) ? classes.color : classes.color2,
                    readOnly: isValueCorrect(1)
                }}
            />

            <TextField
                id="filled-name"
                label="#3"
                placeholder="Type here"
                className={classes.textField}
                value={value3.input}
                onChange={handleChange3('input')}
                margin="normal"
                variant="filled"
                InputProps={{
                    className: isValueCorrect(2) ? classes.color : classes.color2,
                    readOnly: isValueCorrect(2)
                }}
            />

            <TextField
                id="filled-name"
                label="#4"
                placeholder="Type here"
                className={classes.textField}
                value={value4.input}
                onChange={handleChange4('input')}
                margin="normal"
                variant="filled"
                InputProps={{
                    className: isValueCorrect(3) ? classes.color : classes.color2,
                    readOnly: isValueCorrect(3)
                }}
            />

            <TextField
                id="filled-name"
                label="#5"
                placeholder="Type here"
                className={classes.textField}
                value={value5.input}
                onChange={handleChange5('input')}
                margin="normal"
                variant="filled"
                InputProps={{
                    className: isValueCorrect(4) ? classes.color : classes.color2,
                    readOnly: isValueCorrect(4)
                }}
            />

            {!correct && (
                <Button onClick={checkAnswers} variant="contained" size='large' color="secondary" >
                    SUBMIT
            </Button>
            )}

            {again && (
                <p>Some of your answers were right! Just gotta fix a few.</p>
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
