'use client'

import * as React from 'react'
import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Button from '@mui/material/Button'

const options = ['Vulnerabilidade', 'Fraqueza']

export default function FormRequest() {
  const [value, setValue] = React.useState(options[0])
  const [inputValue, setInputValue] = React.useState('')

  const [nomeRegistro, setNome] = React.useState('')
  const [cvssECwss, setCvss] = React.useState('')
  const [sistema, setSistema] = React.useState('')
  const [descricao, setDescricao] = React.useState('')

  const handleSubmit = async (e) => {
    // e.preventDefault()

    const data = {
      tipo: value,
      nomeRegistro,
      cvssECwss,
      sistema,
      descricao,
    }

    const res = await fetch('/api/registro', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const result = await res.json()
    console.log('Resposta da API:', result)
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-10 text-white">
      <h2 className="text-2xl m-5 text-center">Registro de vulnerabilidades e fraquezas encontradas</h2>
      <form
        onSubmit={handleSubmit}
        className="w-5/6 bg-gray-700 rounded-lg shadow-lg p-8 flex flex-col gap-6"
      >
        <Autocomplete
          required
          value={value}
          onChange={(event, newValue) => setValue(newValue || '')}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
          options={options}
          renderInput={(params) => <TextField {...params} label="Tipo" />}
        />

        <FormControl variant="standard">
          <InputLabel>Nome da vulnerabilidade / fraqueza</InputLabel>
          <Input required value={nomeRegistro} onChange={(e) => setNome(e.target.value)} />
        </FormControl>

        <FormControl variant="standard">
          <InputLabel>CVSS / CWSS</InputLabel>
          <Input required type='number' value={cvssECwss} onChange={(e) => setCvss(e.target.value)} />
        </FormControl>

        <FormControl variant="standard">
          <InputLabel>Sistema / App onde foi encontrada</InputLabel>
          <Input required value={sistema} onChange={(e) => setSistema(e.target.value)} />
        </FormControl>

        <FormControl variant="standard">
          <InputLabel>Descrição</InputLabel>
          <Input required value={descricao} onChange={(e) => setDescricao(e.target.value)} />
        </FormControl>

        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </form>
    </section>
  )
}
