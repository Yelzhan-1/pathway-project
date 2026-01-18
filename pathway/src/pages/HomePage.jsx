import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-text">
          <h1 className="hero-title">Pathway</h1>
          <p className="hero-subtitle">
            Платформа для выбора университетов и построения понятного плана подготовки.
            Всё по шагам: что делать сегодня, через месяц и до поступления.
          </p>

          <div className="hero-buttons">
            <Link className="btn btn-dark" to="/universities">
              Explore Universities
            </Link>
            <Link className="btn btn-outline" to="/register">
              Create account
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat-box">
              <div className="stat-number">10+</div>
              <div className="stat-text">Университетов (demo)</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">3</div>
              <div className="stat-text">Шага подготовки</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">1</div>
              <div className="stat-text">План в одном месте</div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <h2 className="section-title">What you can do</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Find universities</h3>
            <p>
              Быстрый поиск по странам и названию. Сохраняй варианты и возвращайся позже.
            </p>
          </div>

          <div className="feature-card">
            <h3>Plan your preparation</h3>
            <p>
              Пошаговый план на недели и месяцы: IELTS, портфолио, документы, дедлайны.
            </p>
          </div>

          <div className="feature-card">
            <h3>Build your future path</h3>
            <p>
              Понимай, что делать после поступления: стажировки, навыки, карьера.
            </p>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-box">
          <h2>Start your Pathway today</h2>
          <p>Выбери университет и начни план подготовки прямо сейчас.</p>
          <Link className="btn btn-dark" to="/universities">
            Get started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
