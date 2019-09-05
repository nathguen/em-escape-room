import React from 'react';
import { MenuItem, Input, InputLabel, FormControl, Select, Button } from '@material-ui/core';

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
        width: 250,
      },
    },
  };


export default function CardsTab(){
    const [option1, setOption1] = React.useState<string[]>(['Select']);
    const [option2, setOption2] = React.useState<string[]>(['Select']);
    const [option3, setOption3] = React.useState<string[]>(['Select']);
    const [option4, setOption4] = React.useState<string[]>(['Select']);

    const [correct, showCorrect] = React.useState(false)
    const [again, tryAgain] = React.useState(false)
    const [none, noneCorrect] = React.useState(false)

    const correctAnswers = '110212';
    var allInput = option1.toString() + option2.toString() + option3.toString() + option4.toString();



    function handleChange1(event: React.ChangeEvent<{ value: unknown }>) {
        setOption1(event.target.value as string[]);
    }
    function handleChange2(event: React.ChangeEvent<{ value: unknown }>) {
        setOption2(event.target.value as string[]);
    }
    function handleChange3(event: React.ChangeEvent<{ value: unknown }>) {
        setOption3(event.target.value as string[]);
    }
    function handleChange4(event: React.ChangeEvent<{ value: unknown }>) {
        setOption4(event.target.value as string[]);
    }

    const checkAnswers = () => {
        console.log(allInput);
        var splitAnswers = correctAnswers.split('');
        var i = 0;
        var countCorrect = 0;
        splitAnswers.forEach(e => {
            if (e === allInput[i]) {
                countCorrect++;

            }
            i++;
            if (countCorrect > 0 && countCorrect < 4) {
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
        <div>
            <FormControl>
            <InputLabel htmlFor="select-multiple">1</InputLabel>
                <Select
                    displayEmpty
                    value={option1}
                    onChange={handleChange1}
                    input={<Input id="select-multiple-placeholder" />}
                    renderValue={selected => {
                        if ((selected as string).length === 0) {
                            return <em>______</em>;
                        }
                        return (selected as string);
                    }}
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

            <FormControl>
            <InputLabel htmlFor="select-multiple">2</InputLabel>
                <Select
                    displayEmpty
                    value={option2}
                    onChange={handleChange2}
                    input={<Input id="select-multiple-placeholder" />}
                    renderValue={selected => {
                        if ((selected as string).length === 0) {
                            return <em>______</em>;
                        }
                        return (selected as string);
                    }}
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

            <FormControl>
            <InputLabel htmlFor="select-multiple">3</InputLabel>
                <Select
                    displayEmpty
                    value={option3}
                    onChange={handleChange3}
                    input={<Input id="select-multiple-placeholder" />}
                    renderValue={selected => {
                        if ((selected as string).length === 0) {
                            return <em>______</em>;
                        }
                        return (selected as string);
                    }}
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

            <FormControl>
            <InputLabel htmlFor="select-multiple">4</InputLabel>
                <Select
                    displayEmpty
                    value={option4}
                    onChange={handleChange4}
                    input={<Input id="select-multiple-placeholder" />}
                    renderValue={selected => {
                        if ((selected as string).length === 0) {
                            return <em>______</em>;
                        }
                        return (selected as string);
                    }}
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