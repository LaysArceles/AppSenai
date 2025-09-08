import { useState } from "react";

export const Title = ({ addTitle }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTitle = () => {
    addTitle(inputValue);
    setInputValue(""); // limpa o input
  };

  return (
    <div className="cronos">
      <input
        type="text"
        placeholder="Digite um título novo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTitle}>Adicionar título</button>
    </div>
  );
};

export const TitlesPage = ({ titles }) => {
  return (
    <div className="titles-page">
      <h1>Todos os títulos:</h1>
      {titles.length === 0 ? (
        <p>Nenhum título adicionado ainda.</p>
      ) : (
        <ul>
          {titles.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
