import "./Work.scss";
import Header from "../header/Header";

import React, { useState } from "react";

const Work: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    phoneNumber: "",
    email: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState("");
  const [validationErrors, setValidationErrors] = useState({
    firstName: "",
    lastName: "",
    age: "",
    phoneNumber: "",
    email: "",
  });

  const isLettersOnly = (value: string): boolean =>
    /^[А-Яа-яЁёA-Za-z]+$/.test(value);

  const isNumeric = (value: string): boolean => /^\d+$/.test(value);

  const isValidEmail = (value: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    setFormData({
      ...formData,
      [fieldName]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newValidationErrors = {
      firstName: "",
      lastName: "",
      age: "",
      phoneNumber: "",
      email: "",
    };

    if (!isLettersOnly(formData.firstName)) {
      newValidationErrors.firstName = "Введіть коректне ім'я";
    }

    if (!isLettersOnly(formData.lastName)) {
      newValidationErrors.lastName = "Введіть коректне прізвище";
    }

    if (!isNumeric(formData.age)) {
      newValidationErrors.age = "Введіть коректний вік";
    }

    if (!isNumeric(formData.phoneNumber)) {
      newValidationErrors.phoneNumber = "Введіть коректний номер";
    }

    if (!isValidEmail(formData.email)) {
      newValidationErrors.email = "Введіть коректний email";
    }

    setValidationErrors(newValidationErrors);

    if (Object.values(newValidationErrors).some((error) => error.length > 0)) {
      setSubmissionStatus("Будь ласка, введіть коректну інформацію.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/auth/createCandidate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSubmissionStatus("Форма успішно відправлена!");
        setFormData({
          firstName: "",
          lastName: "",
          age: "",
          phoneNumber: "",
          email: "",
        });
      } else {
        const errorData = await response.json();
        setSubmissionStatus(`Помилка: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Помилка при відправці форми:", error);
      setSubmissionStatus(
        "Помилка при відправці форми. Будь ласка, спробуйте знову."
      );
    }
  };

  return (
    <div className="prom">
      <div className="work_back">
        <Header />
        <div className="container">
          <div className="work_text">Починай разом з Нами</div>
        </div>
      </div>

      <div className="container">
        <div className="work-form">
          <h2>Форма працевлаштування</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Ім'я:
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange(e, "firstName")}
              />
              {validationErrors.firstName && (
                <p>{validationErrors.firstName}</p>
              )}
            </label>
            <br />

            <label>
              Прізвище:
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange(e, "lastName")}
              />
              {validationErrors.lastName && <p>{validationErrors.lastName}</p>}
            </label>
            <br />

            <label>
              Вік:
              <input
                type="text"
                value={formData.age}
                onChange={(e) => handleInputChange(e, "age")}
              />
              {validationErrors.age && <p>{validationErrors.age}</p>}
            </label>
            <br />

            <label>
              Мобільний номер:
              <input
                type="text"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange(e, "phoneNumber")}
              />
              {validationErrors.phoneNumber && (
                <p>{validationErrors.phoneNumber}</p>
              )}
            </label>
            <br />

            <label>
              Email:
              <input
                type="text"
                value={formData.email}
                onChange={(e) => handleInputChange(e, "email")}
              />
              {validationErrors.email && <p>{validationErrors.email}</p>}
            </label>
            <br />

            <button type="submit">Відправити</button>
          </form>

          {submissionStatus && <p>{submissionStatus}</p>}
        </div>
      </div>
    </div>
  );
};

export default Work;
