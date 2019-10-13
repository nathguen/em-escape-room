import React from 'react';
import { FormControl, MenuItem, Select, Input, Button, createStyles, makeStyles, Theme, } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';



const options = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
];

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        color: {
            color: 'green',
        },
        color2: {
            color: 'black'
        },
        inputWrapper: {
            width: 200,
            marginRight: 10
        },
        inputsWrapper: {
            marginBottom: 15
        },
        submitWrapper: {
            marginBottom: 15
        },
        messageWrapper: {
            marginBottom: 15
        },
        correctInput: {
            background: 'green',
            color: 'white'
        }
    }),
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 200,
        },
    },
};


enum InputColor {
    yellow = 'yellow',
    red = 'red',
    blue = 'blue',
    green = 'green'
}


export default function EmotionalTab() {

    const classes = useStyles();

    const [optionYellow, setOptionYellow] = React.useState<string>('');
    const [optionRed, setOptionRed] = React.useState<string>('');
    const [optionBlue, setOptionBlue] = React.useState<string>('');
    const [optionGreen, setOptionGreen] = React.useState<string>('');

    const [visibleOptionYellow, setVisibleOptionYellow] = React.useState<string>('');
    const [visibleOptionRed, setVisibleOptionRed] = React.useState<string>('');
    const [visibleOptionBlue, setVisibleOptionBlue] = React.useState<string>('');
    const [visibleOptionGreen, setVisibleOptionGreen] = React.useState<string>('');

    const [attemptMade, setAttemptMade] = React.useState(false);

    const correctAnswers = ['7', 'E', '4', 'F'];


    const handleInputChange = (e: any, inputColor: InputColor) => {
        const inputValue = e.target.value;

        switch (inputColor) {
            case InputColor.yellow:
                setVisibleOptionYellow(inputValue);
                break;

            case InputColor.red:
                setVisibleOptionRed(inputValue);
                break;

            case InputColor.blue:
                setVisibleOptionBlue(inputValue);
                break;

            case InputColor.green:
                setVisibleOptionGreen(inputValue);
                break;
        }
    };

    const setAllValues = () => {
        setOptionYellow(visibleOptionYellow);
        setOptionRed(visibleOptionRed);
        setOptionBlue(visibleOptionBlue);
        setOptionGreen(visibleOptionGreen);

        if (!attemptMade) {
            setAttemptMade(true);
        }
    };

    const isInputCorrect = (inputColor: InputColor) => {
        let inputValue: string = '';
        let answer: string = '';

        switch (inputColor) {
            case InputColor.yellow:
                inputValue = optionYellow;
                answer = correctAnswers[0];
                break;

            case InputColor.red:
                inputValue = optionRed;
                answer = correctAnswers[1];
                break;

            case InputColor.blue:
                inputValue = optionBlue;
                answer = correctAnswers[2];
                break;

            case InputColor.green:
                inputValue = optionGreen;
                answer = correctAnswers[3];
                break;
        }

        return inputValue === answer;
    };

    const numberOfCorrectAnswers = correctAnswers.reduce((num, answer, index) => {
        let inputValue: string = '';

        switch (index) {
            case 0:
                inputValue = optionYellow;
                break;

            case 1:
                inputValue = optionRed;
                break;

            case 2:
                inputValue = optionBlue;
                break;

            case 3:
                inputValue = optionGreen;
                break;
        }

        if (inputValue === answer) {
            num++;
        }

        return num;
    }, 0);


    return (
        <div>
            <div className={classes.inputsWrapper}>
                <FormControl className={classes.inputWrapper}>
                    <InputLabel htmlFor="select-yellow">Yellow</InputLabel>
                    <Select
                        value={visibleOptionYellow}
                        onChange={e => handleInputChange(e, InputColor.yellow)}
                        className={isInputCorrect(InputColor.yellow) ? classes.correctInput : ''}
                        input={<Input name="select-yellow" id="select-yellow" />}
                        MenuProps={MenuProps}
                    >
                        <MenuItem disabled value="">
                            <em>______</em>
                        </MenuItem>
                        {options.map(option => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl className={classes.inputWrapper}>
                    <InputLabel htmlFor="select-red">Red</InputLabel>
                    <Select
                        value={visibleOptionRed}
                        onChange={e => handleInputChange(e, InputColor.red)}
                        className={isInputCorrect(InputColor.red) ? classes.correctInput : ''}
                        input={<Input name="select-red" id="select-red" />}
                        MenuProps={MenuProps}
                    >
                        <MenuItem disabled value="">
                            <em>______</em>
                        </MenuItem>
                        {options.map(option => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl className={classes.inputWrapper}>
                    <InputLabel htmlFor="select-blue">Blue</InputLabel>
                    <Select
                        value={visibleOptionBlue}
                        onChange={e => handleInputChange(e, InputColor.blue)}
                        className={isInputCorrect(InputColor.blue) ? classes.correctInput : ''}
                        input={<Input name="select-blue" id="select-blue" />}
                        MenuProps={MenuProps}
                    >
                        <MenuItem disabled value="">
                            <em>______</em>
                        </MenuItem>
                        {options.map(option => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl className={classes.inputWrapper}>
                    <InputLabel htmlFor="select-green">Green</InputLabel>
                    <Select
                        value={visibleOptionGreen}
                        onChange={e => handleInputChange(e, InputColor.green)}
                        className={isInputCorrect(InputColor.green) ? classes.correctInput : ''}
                        input={<Input name="select-green" id="select-green" />}
                        MenuProps={MenuProps}
                    >
                        <MenuItem disabled value="">
                            <em>______</em>
                        </MenuItem>
                        {options.map(option => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
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
                            <p>You may now open the <strong>blue box with white around it</strong> to receive one of the words for the final clue.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );

}