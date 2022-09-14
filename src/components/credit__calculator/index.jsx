import React, { useState } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Grid from '@mui/material/Grid'
import Slider from '@mui/material/Slider'
import {
  Container,
  Main,
  Title,
  Left,
  KType,
  KSumm,
  KTime,
  Right,
  Card,
  MyButton,
} from './style'
import { useNavigate } from 'react-router-dom'
import { calculate } from './calc-factory'

const Calculator = () => {
  const navigate = useNavigate()

  // ----------------begin Kredit selected type------------

  const [select, setSelect] = useState(null)

  const handleChangeSelect = (event) => {
    console.log(event.target.value, 'select')
    setSelect(event.target.value)

    MonthPaymentSumm(summ, pay, event.target.value, time)
  }

  // ----------------end Kredit selected type------------

  // ----------------begin Kredit switch type------------

  const [swch, setSwch] = useState({
    anuited: true,
    differ: null,
  })

  const handleChangeSwitch = (event) => {
    if (event.target.name === 'anuited') {
      setSwch({
        anuited: true,
        differ: false,
      })
      MonthPaymentSumm(summ, pay, select, time, 'anuited')
    } else {
      setSwch({
        anuited: false,
        differ: true,
      })
      MonthPaymentSumm(summ, pay, select, time, 'differ')
    }
  }

  const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    '& .MuiSwitch-track': {
      borderRadius: 22 / 2,
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 16,
        height: 16,
      },
      '&:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
      },
      '&:after': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12,
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: 'none',
      width: 16,
      height: 16,
      margin: 2,
    },
  }))

  // ----------------end Kredit switch type------------

  // ----------------begin Kredit Pay type------------

  const [pay, setPay] = useState(20)

  const handleChangeRadio = (event) => {
    console.log(event.target.value, 'pay')

    setPay(event.target.value)

    MonthPaymentSumm(summ, event.target.value, select, time, swch)
  }

  // ----------------end Kredit Pay type------------

  // ----------------begin Kredit Summ------------

  const [summ, setSumm] = useState(5)

  const handleSliderChangeSumm = (event) => {
    console.log(event.target.value, 'summSlider')

    setSumm(event.target.value)

    MonthPaymentSumm(event.target.value, pay, select, time, swch.anuited)
  }

  const handleInputChangeSumm = (event) => {
    console.log(event.target.value, 'summInput')

    event.target.value !== '' &&
      MonthPaymentSumm(event.target.value, pay, select, time, swch.anuited)

    setSumm(event.target.value === '' ? '' : Number(event.target.value))
  }

  const handleBlurSumm = () => {
    if (summ < 5) {
      setSumm(5)
    } else if (summ > 100) {
      setSumm(100)
    }
  }

  const marksSumm = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 10,
      label: '10',
    },
    {
      value: 20,
      label: '20',
    },
    {
      value: 30,
      label: '30',
    },
    {
      value: 40,
      label: '40',
    },
    {
      value: 50,
      label: '50',
    },
    {
      value: 60,
      label: '60',
    },
    {
      value: 70,
      label: '70',
    },
    {
      value: 80,
      label: '80',
    },
    {
      value: 90,
      label: '90',
    },
    {
      value: 100,
      label: '100',
    },
  ]

  // ----------------end Kredit Summ------------

  // ----------------begin Kredit Time------------

  const [time, setTime] = useState(6)

  const handleSliderChangeTime = (event, newTime) => {
    setTime(newTime)
    MonthPaymentSumm(summ, pay, select, newTime, swch.anuited)
  }

  const handleInputChangeTime = (event) => {
    event.target.value !== '' &&
      MonthPaymentSumm(summ, pay, select, event.target.value, swch.anuited)

    setTime(event.target.value === '' ? '' : Number(event.target.value))
  }

  const handleBlurTime = () => {
    if (time < 0) {
      setTime(0)
    } else if (time > 48) {
      setTime(48)
    }
  }

  const marksTime = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 6,
      label: '6 oy',
    },
    {
      value: 12,
      label: '12',
    },
    {
      value: 18,
      label: '18',
    },
    {
      value: 24,
      label: '24',
    },
    {
      value: 30,
      label: '30',
    },
    {
      value: 36,
      label: '36',
    },
    {
      value: 42,
      label: '42',
    },

    {
      value: 48,
      label: '48 oy',
    },
  ]

  // ----------------end Kredit Time------------

  // ----------------begin Right Display func------------

  const [monthPaymentSumm, setMonthPaymentSumm] = useState(0)

  const [qarz, setQarz] = useState(0)
  const [foiz, setFoiz] = useState(0)

  const MonthPaymentSumm = (summ, pay, select, time, method) => {
    summ = parseFloat(summ) * 1000000
    pay = parseFloat(pay)
    select = parseFloat(select)
    time = parseInt(time)

    console.log(qarz, foiz)
    console.log(method, 'method')
    console.log(summ, 'summ')
    console.log(pay, 'pay')
    console.log(select, 'select')
    console.log(time, 'time')

    summ = summ - summ * (pay / 100)
    // console.log(calculate(method)())
    if (method === 'anuited' || method === undefined) {
      setMonthPaymentSumm(
        summ *
          (select / (time * 100) +
            select /
              (time * 100) /
              (Math.pow(1 + select / (time * 100), time) - 1)),
      )
      setQarz(monthPaymentSumm - summ * (select / (time * 100)))
      setFoiz(summ * (select / (time * 100)))

      console.log(monthPaymentSumm, 'A__monthPaymentSumm')
      console.log(qarz, 'A__qarz')
      console.log(foiz, 'A__foiz')
    } else {
      setMonthPaymentSumm(summ / time + summ * (select / (time * 100)))
      setQarz(summ / time)
      setFoiz(summ * (select / (time * 100)))

      console.log(monthPaymentSumm, 'D__monthPaymentSumm')
      console.log(qarz, 'D__qarz')
      console.log(foiz, 'D__foiz')
    }
  }

  // ----------------end Right Display func------------

  const getListOfPayement = (
    tatalCreditAbount,
    intialPaymentPercentage,
    loanPercentage,
    duration,
    paymentType,
  ) => {
    tatalCreditAbount = parseFloat(tatalCreditAbount) * 1000000
    intialPaymentPercentage = parseFloat(intialPaymentPercentage)
    loanPercentage = parseFloat(loanPercentage)
    duration = parseInt(duration)

    let paymentList = []


    while (--duration > 0) {
      if (paymentType === 'anuited' || paymentType === undefined) {
        let monthlyAmount = tatalCreditAbount * (loanPercentage / (duration * 100) + loanPercentage / (duration * 100) / (Math.pow(1 + loanPercentage / (duration * 100), duration) - 1));
        let qarz = monthlyAmount - tatalCreditAbount * (loanPercentage / (duration * 100));
        let foiz = tatalCreditAbount * (loanPercentage / (duration * 100));
        
        paymentList.push({
          total: tatalCreditAbount,
          monthlyAmount: monthlyAmount,
          qarz: qarz,
          foiz: foiz,
        })

        tatalCreditAbount -= monthlyAmount - foiz

      } else {
        let monthlyAmount =  tatalCreditAbount / duration + tatalCreditAbount * (loanPercentage / (duration * 100));
        let qarz = tatalCreditAbount / duration;
        let foiz = tatalCreditAbount * (loanPercentage / (duration * 100));

        paymentList.push({
          total: tatalCreditAbount,
          monthlyAmount: monthlyAmount,
          qarz: qarz,
          foiz: foiz,
        })

        tatalCreditAbount -= monthlyAmount - foiz
      }
    }
    
    localStorage.setItem('paymentList', JSON.stringify(paymentList))
  }

  return (
    <Container>
      <Title fs="28px" m="0 0 50px 0">
        Kredit Kalkulyator
      </Title>
      <Main>
        <Left>
          <KType>
            <Title fs="20px" m="0 0 20px 0">
              Kredit Turi
            </Title>
            <KType.Method>
              <KType.SelectMethod>
                <Box sx={{ minWidth: 320 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Qandat Kredit olishni istaysiz
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={select}
                      label="Qandat Kredit olishni istaysiz"
                      onChange={handleChangeSelect}
                    >
                      <MenuItem value={'24.9'}>Avto Kredit</MenuItem>
                      <MenuItem value={'20'}>Mikro Kredit</MenuItem>
                      <MenuItem value={'22'}>Chakana Kredit</MenuItem>
                      <MenuItem value={'24'}>Maishiy Kredit</MenuItem>
                      <MenuItem value={'26'}>B2B Kredit</MenuItem>
                      <MenuItem value={'14'}>Chorva Kredit</MenuItem>
                      <MenuItem value={'12'}>Servis Kredit</MenuItem>
                      <MenuItem value={'10'}>Yoshlar Kredit</MenuItem>
                      <MenuItem value={'8'}>Ta'lim Kredit</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </KType.SelectMethod>
              <KType.SwitchMethod>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Android12Switch
                        defaultChecked
                        checked={swch.anuited}
                        onChange={handleChangeSwitch}
                        name="anuited"
                      />
                    }
                    label="Annuited to'lov qilish"
                  />
                  <FormControlLabel
                    control={
                      <Android12Switch
                        checked={swch.differ}
                        onChange={handleChangeSwitch}
                        name="differ"
                      />
                    }
                    label="Differ to'lov qilish"
                  />
                </FormGroup>
              </KType.SwitchMethod>
            </KType.Method>
            <KType.Pay>
              <FormControl
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <RadioGroup
                  style={{ display: 'inline' }}
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={pay}
                  onChange={handleChangeRadio}
                >
                  <FormControlLabel
                    style={{ marginLeft: '50px' }}
                    value="20"
                    control={<Radio />}
                    label="Boshlang'ich to'lov 20%"
                  />
                  <FormControlLabel
                    style={{ marginLeft: '50px' }}
                    value="30"
                    control={<Radio />}
                    label="Boshlang'ich to'lov 30%"
                  />
                  <FormControlLabel
                    style={{ marginLeft: '50px' }}
                    value="50"
                    control={<Radio />}
                    label="Boshlang'ich to'lov 50%"
                  />
                </RadioGroup>
              </FormControl>
            </KType.Pay>
          </KType>
          <KSumm>
            <Title fs="20px" m="100px 0 20px 0">
              Kredit Miqdori (mln)
            </Title>
            <Box sx={{ width: 750 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <Slider
                    value={typeof summ === 'number' ? summ : 5}
                    onChange={handleSliderChangeSumm}
                    aria-labelledby="input-slider-summ"
                    marks={marksSumm}
                  />
                </Grid>
                <Grid item>
                  <KSumm.Input
                    value={summ}
                    onChange={handleInputChangeSumm}
                    onBlur={handleBlurSumm}
                    inputProps={{
                      step: 10,
                      min: 5,
                      max: 100,
                      type: 'number',
                      'aria-labelledby': 'input-slider-summ',
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </KSumm>
          <KTime>
            <Title fs="20px" m="100px 0 20px 0">
              Kredit Muddati (oy)
            </Title>
            <Box sx={{ width: 750 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <Slider
                    value={typeof time === 'number' ? time : 1}
                    onChange={handleSliderChangeTime}
                    aria-labelledby="input-slider-time"
                    marks={marksTime}
                    max="48"
                  />
                </Grid>
                <Grid item>
                  <KSumm.Input
                    value={time}
                    onChange={handleInputChangeTime}
                    onBlur={handleBlurTime}
                    inputProps={{
                      step: 1,
                      min: 1,
                      max: 48,
                      type: 'number',
                      'aria-labelledby': 'input-slider-time',
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </KTime>
        </Left>
        <Right>
          <Card>
            <Card.Pay>{Math.round(monthPaymentSumm)} so'm</Card.Pay>
            <Card.Description>Oylik to'lov</Card.Description>
            <Card.Pay>{select} %</Card.Pay>
            <Card.Description>Foiz</Card.Description>
            <Card.Pay>{Math.round(qarz)} so'm</Card.Pay>
            <Card.Description>To'liq foizli to'lov</Card.Description>
            <Card.Pay>{Math.round(monthPaymentSumm * time)} so'm</Card.Pay>
            <Card.Description>Umumiy kredt miqdori</Card.Description>
            <MyButton
              onClick={() => {
                getListOfPayement(summ, pay, select, time, swch)
                navigate(swch.anuited ? `/annuited__table` : `/differ__table`)
              }}
            >
              To'lov tartibi
            </MyButton>
          </Card>
        </Right>
      </Main>
    </Container>
  )
}

export default Calculator
