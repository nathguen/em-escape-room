import React from 'react';
import { MenuItem, Input, InputLabel, FormControl, Select, Button, makeStyles, createStyles, Theme, Typography } from '@material-ui/core';
import classes from '*.module.scss';
import { number } from 'prop-types';

const options = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
];

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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        cardsTabRoot: {
            display: 'flex'
        },
        cardsTabInputWrapper: {
            width: 200,
            marginRight: 10
        },
        cardsTabInputsWrapper: {
            marginBottom: 15,
        },
        cardsTabSubmitWrapper: {
            marginBottom: 15
        },
        cardsTabMessageWrapper: {
            marginBottom: 15
        },
        correctInput: {
            color: 'white',
            background: 'green',
            cursor: 'initial'
        },
    }),
);


export default function CardsTab() {
    const classes = useStyles();

    let input1: HTMLSelectElement | null = null;
    let input2: HTMLSelectElement | null = null;
    let input3: HTMLSelectElement | null = null;
    let input4: HTMLSelectElement | null = null;

    const [option1VisibleValue, setOption1VisibleValue] = React.useState<string>('');
    const [option2VisibleValue, setOption2VisibleValue] = React.useState<string>('');
    const [option3VisibleValue, setOption3VisibleValue] = React.useState<string>('');
    const [option4VisibleValue, setOption4VisibleValue] = React.useState<string>('');

    const [option1, setOption1] = React.useState<string>('');
    const [option2, setOption2] = React.useState<string>('');
    const [option3, setOption3] = React.useState<string>('');
    const [option4, setOption4] = React.useState<string>('');

    const [attemptMade, setAttemptMade] = React.useState(false);

    const correctAnswers = ['2', '6', '9', '4'];

    const isValueCorrect = (inputNumber: number): boolean => {
        let inputValue: string = '';
        let answer: string = '';

        switch (inputNumber) {
            case 1:
                inputValue = option1;
                answer = correctAnswers[0];
                break;

            case 2:
                inputValue = option2;
                answer = correctAnswers[1];
                break;

            case 3:
                inputValue = option3;
                answer = correctAnswers[2];
                break;

            case 4:
                inputValue = option4;
                answer = correctAnswers[3];
                break;
        }

        return inputValue === answer;
    };

    const setAllValues = () => {
        if (input1) {
            setOption1(input1.value);
        }
        if (input2) {
            setOption2(input2.value);
        }
        if (input3) {
            setOption3(input3.value);
        }
        if (input4) {
            setOption4(input4.value);
        }

        if (!attemptMade) {
            setAttemptMade(true);
        }
    };

    const numberOfCorrectAnswers = correctAnswers.reduce((num, answer, index) => {
        let inputValue: string = '';
        switch (index) {
            case 0:
                inputValue = option1;
                break;

            case 1:
                inputValue = option2;
                break;

            case 2:
                inputValue = option3;
                break;

            case 3:
                inputValue = option4;
                break;
        }

        if (inputValue === answer) {
            num++;
        }

        return num;
    }, 0);

    const updateSelect = (e: any, inputNum: number) => {
        const value = e.target.value as string;

        switch (inputNum) {
            case 1:
                setOption1VisibleValue(value);
                break;

            case 2:
                setOption2VisibleValue(value);
                break;

            case 3:
                setOption3VisibleValue(value);
                break;

            case 4:
                setOption4VisibleValue(value);
                break;
        }
    };

    return (
        <div>
            <div className={classes.cardsTabInputsWrapper}>
                <FormControl className={classes.cardsTabInputWrapper}>
                    <InputLabel htmlFor="select-1">1</InputLabel>
                    <Select
                        input={<Input name="select-1" id="select-1" />}
                        inputRef={(el: HTMLSelectElement) => input1 = el}
                        className={isValueCorrect(1) ? classes.correctInput : ''}
                        MenuProps={MenuProps}
                        onChange={e => updateSelect(e, 1)}
                        value={option1VisibleValue}
                        readOnly={isValueCorrect(1)}
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

                <FormControl className={classes.cardsTabInputWrapper}>
                    <InputLabel htmlFor="select-2">2</InputLabel>
                    <Select
                        input={<Input name="select-2" id="select-2" />}
                        inputRef={(el: HTMLSelectElement) => input2 = el}
                        className={isValueCorrect(2) ? classes.correctInput : ''}
                        MenuProps={MenuProps}
                        onChange={e => updateSelect(e, 2)}
                        value={option2VisibleValue}
                        readOnly={isValueCorrect(2)}
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

                <FormControl className={classes.cardsTabInputWrapper}>
                    <InputLabel htmlFor="select-3">3</InputLabel>
                    <Select
                        input={<Input name="select-3" id="select-3" />}
                        inputRef={el => input3 = el}
                        className={isValueCorrect(3) ? classes.correctInput : ''}
                        MenuProps={MenuProps}
                        onChange={e => updateSelect(e, 3)}
                        value={option3VisibleValue}
                        readOnly={isValueCorrect(3)}
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

                <FormControl className={classes.cardsTabInputWrapper}>
                    <InputLabel htmlFor="select-4">4</InputLabel>
                    <Select
                        input={<Input name="select-4" id="select-4" />}
                        inputRef={el => input4 = el}
                        className={isValueCorrect(4) ? classes.correctInput : ''}
                        MenuProps={MenuProps}
                        onChange={e => updateSelect(e, 4)}
                        value={option4VisibleValue}
                        readOnly={isValueCorrect(4)}
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
            <div className={classes.cardsTabSubmitWrapper}>
                {numberOfCorrectAnswers < correctAnswers.length && (
                    <Button onClick={setAllValues} variant="contained" size='large' color="secondary" >
                        SUBMIT
                    </Button>
                )}
            </div>

            {attemptMade && (
                <div className={classes.cardsTabMessageWrapper}>
                    {numberOfCorrectAnswers > 0 && numberOfCorrectAnswers < correctAnswers.length && (
                        <Typography>Some of your answers were right! Just gotta fix a few.</Typography>
                    )}

                    {numberOfCorrectAnswers === 0 && (
                        <Typography>Sorry, none of those are right. Please try again</Typography>
                    )}

                    {numberOfCorrectAnswers === correctAnswers.length && (
                        <div>
                            <Typography variant='h3' style={{ marginBottom: 15 }}>CORRECT!</Typography>
                            <Typography>You may now open the <strong>White Envelope</strong> to receive one of the words for the final clue.</Typography>
                        </div>
                    )}
                </div>
            )}
        </div>
    );

}