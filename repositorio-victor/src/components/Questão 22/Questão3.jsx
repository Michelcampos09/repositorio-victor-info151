import { useState } from 'react'

export default function Questao3() {
  const [nomes, setNomes] = useState(['Ana', 'Bruno'])
  const [input, setInput] = useState('')

  function adicionarNome() {
    if (input.trim() !== '') {
      setNomes([...nomes, input])
      setInput('')
    }
  }

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={adicionarNome}>Adicionar</button>

      <ul>
        {nomes.map((nome, indice) => (
          <li key={indice}>{nome}</li>
        ))}
      </ul>
    </div>
  )
}
