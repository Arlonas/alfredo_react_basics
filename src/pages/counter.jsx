import { Box, Button, Center, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import counter_types from "../redux/reducers/counter/types";

const CounterPage = () => {
  const countSelector = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const changeCountValue = (dir) => {
    if (dir === "increment") {
      dispatch({
        type: counter_types.INCREMENT_COUNTER,
      });
    } else if (dir === "decrement") {
      dispatch({
        type: counter_types.DECREMENT_COUNTER,
      });
    }
  };
 const [numberInput, setnumberInput] = useState(0)
  const InputHandler = (event) => {
      const { value } = event.target
      setnumberInput(value)
  }

  const setCounter = () => {
    dispatch({
     type:"SET_COUNTER",
     value: parseInt(numberInput)
    })
     
  }

  const resetCounter = () => {
    dispatch({
      type: "RESET_COUNTER",
    })
  }
  return (
    <Box maxWidth="2xl" padding="16">
      <Flex alignItems="center" marginTop="10">
        <Button onClick={() => changeCountValue("decrement")} marginRight="4">
          -
        </Button>
        <Text fontSize="2xl">{countSelector.count}</Text>
        <Button onClick={() => changeCountValue("increment")} marginLeft="4">
          +
        </Button>
      </Flex>
      <Flex alignItems="center" marginTop="4">
        {/* ini jg bisa pake inputhandler doank tanpa event dan anonymous function  */}
        {/* karena onchange itu exceute anonymous function jadi input handler itu tidak dapat */}
        {/* parameter event maka dari itu input handler dikasih parameter event jg */}
        <Input onChange={(event) => InputHandler(event)}/>
        <Button onClick={() => setCounter()} marginLeft="4">Set Counter</Button>
      </Flex>
      <Button onClick={() => resetCounter()}marginTop="4">Reset Counter</Button>
    </Box>
  );
};

export default CounterPage;
