import React from "react";
import styles from "./Portfolio.module.css";

export default function Portfolio (){
  return (
    <section className={styles.education} id="education">
      <h2 className={styles.heading}>
        My <span>Projects</span>
      </h2>
      <div className={styles.educationRow}>
        <div className={styles.educationColumn}>
          <div className={styles.educationBox}>
            <div className={styles.educationContent}>
              <div className={styles.content}>
                <div className={styles.year}>
                  <h3>BMI Calculator</h3>
                </div>
                <p>
                  The BMI Calculator is a TypeScript-based CLI tool that
                  calculates Body Mass Index (BMI) using user inputs for height
                  and weight. It provides health status feedback (Underweight,
                  Healthy, Overweight) with color-coded results using Chalk, and
                  features an interactive interface with Inquirer.
                  <a
                    target="_blank"
                    href="https://github.com/Tayyabkhalid993/PIAIC56/tree/main/NodeProjects/BMI"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </p>
              </div>
            </div>

            <div className={styles.educationContent}>
              <div className={styles.content}>
                <div className={styles.year}>
                  <h3>Rock-Paper-Scissors</h3>
                </div>
                <p>
                  A classic Rock-Paper-Scissors game. It allows players to enter
                  their name, choose between rock, paper, and scissors, and then
                  compares their choice to a computer&apos;s random selection. The
                  game displays the winner and offers the option to play again.
                  <a
                    className="text-blue-500 hover:underline ml-2"
                    target="_blank"
                    href="https://github.com/Tayyabkhalid993/PIAIC56/tree/main/NodeProjects/Other_Projects/Rock_Paper_sessior"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </p>
              </div>
            </div>

            <div className={styles.educationContent}>
              <div className={styles.content}>
                <div className={styles.year}>
                  <h3>Number Guessing Game</h3>
                </div>
                <p>
                  A number guessing game. The computer generates a random
                  number, and the user is prompted to guess a number between 1
                  and 10. If the guess is correct, the game ends with a
                  congratulatory message. Otherwise, the user receives feedback
                  and can try again.
                  <a
                    target="_blank"
                    href="https://github.com/Tayyabkhalid993/PIAIC56/tree/main/NodeProjects/Project01_number_guessing_game"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.educationColumn}>
          <div className={styles.educationBox}>
            <div className={styles.educationContent}>
              <div className={styles.content}>
                <div className={styles.year}>
                  <h3>ATM</h3>
                </div>
                <p>
                  This TypeScript code simulates a simple ATM with a CLI.
                  Users can sign in with predefined credentials and perform
                  actions like checking their balance, withdrawing cash, or
                  using pre-defined &quot;Fast cash&quot; amounts.
                  <a
                    className="text-blue-500 hover:underline ml-2"
                    target="_blank"
                    href="https://github.com/Tayyabkhalid993/PIAIC56/tree/main/NodeProjects/Project02_ATM"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </p>
              </div>
            </div>

            <div className={styles.educationContent}>
              <div className={styles.content}>
                <div className={styles.year}>
                  <h3>To-Do List</h3>
                </div>
                <p>
                  A simple to-do list application where users can add tasks.
                  The tasks are displayed until the user confirms they&apos;re done,
                  after which the full list is shown.
                  <a
                    className="text-blue-500 hover:underline ml-2"
                    target="_blank"
                    href="https://github.com/Tayyabkhalid993/PIAIC56/tree/main/NodeProjects/Project03_toDoList"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </p>
              </div>
            </div>

            <div className={styles.educationContent}>
              <div className={styles.content}>
                <div className={styles.year}>
                  <h3>Currency Converter</h3>
                </div>
                <p>
                  A currency converter that lets users select currencies and
                  enter amounts to convert. The app uses pre-defined exchange
                  rates to calculate and display the converted amount.
                  <a
                    className="text-blue-500 hover:underline ml-2"
                    target="_blank"
                    href="https://github.com/Tayyabkhalid993/PIAIC56/tree/main/NodeProjects/Other_Projects/Rock_Paper_sessior"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



