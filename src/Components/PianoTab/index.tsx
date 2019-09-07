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
// const theme = createMuiTheme({
//     palette: {
//       action: {
//         disabledBackground: 'green'
//       }
//     }
//   });


export default function PianoTab() {

    const classes = useStyles();

    const [value1, setValue1] = React.useState<State>({ input: '' })
    const [value2, setValue2] = React.useState<State>({ input: '' })
    const [value3, setValue3] = React.useState<State>({ input: '' })
    const [value4, setValue4] = React.useState<State>({ input: '' })
    const [value5, setValue5] = React.useState<State>({ input: '' })
    const [value6, setValue6] = React.useState<State>({ input: '' })
    const [value7, setValue7] = React.useState<State>({ input: '' })

    const [correct, showCorrect] = React.useState(false)
    const [again, tryAgain] = React.useState(false)
    const [none, noneCorrect] = React.useState(false)

    const correctAnswers = 'GAEDFBC';
    var allInput = value1.input + value2.input + value3.input + value4.input + value5.input + value6.input + value7.input;


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
    const handleChange6 = (input: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue6({ ...value6, [input]: event.target.value.toUpperCase() });
    };
    const handleChange7 = (input: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue7({ ...value7, [input]: event.target.value.toUpperCase() });
    };

    const checkAnswers = () => {
        var splitAnswers = correctAnswers.split('');
        var i = 0;
        var countCorrect = 0;
        splitAnswers.forEach(e => {
            if (e === allInput[i]) {
                countCorrect++;

            }
            i++;
            if (countCorrect > 0 && countCorrect < 7) {
                tryAgain(true)
                noneCorrect(false)
            }

        })
        if (correctAnswers === allInput) {
            tryAgain(false)
            noneCorrect(false)
            showCorrect(true)
        }
        if (countCorrect === 0) {
            noneCorrect(true)
        }


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
                InputProps={value1.input === correctAnswers[0] && again === true || correct === true ? {
                    className: classes.color
                } : { className: classes.color2 }}
                disabled={value1.input === correctAnswers[0] && again === true || correct === true ? true : false}
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
                InputProps={value2.input === correctAnswers[1] && again === true || correct === true ? {
                    className: classes.color
                } : { className: classes.color2 }}
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
                InputProps={value3.input === correctAnswers[2] && again === true || correct === true ? {
                    className: classes.color
                } : { className: classes.color2 }}
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
                InputProps={value4.input === correctAnswers[3] && again === true || correct === true ? {
                    className: classes.color
                } : { className: classes.color2 }}
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
                InputProps={value5.input === correctAnswers[4] && again === true || correct === true ? {
                    className: classes.color
                } : { className: classes.color2 }}
            />

            <TextField
                id="filled-name"
                label="#6"
                placeholder="Type here"
                className={classes.textField}
                value={value6.input}
                onChange={handleChange6('input')}
                margin="normal"
                variant="filled"
                InputProps={value6.input === correctAnswers[5] && again === true || correct === true ? {
                    className: classes.color
                } : { className: classes.color2 }}
            />

            <TextField
                id="filled-name"
                label="#7"
                placeholder="Type here"
                className={classes.textField}
                value={value7.input}
                onChange={handleChange7('input')}
                margin="normal"
                variant="filled"
                InputProps={value7.input === correctAnswers[6] && again === true || correct === true ? {
                    className: classes.color
                } : { className: classes.color2 }}
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