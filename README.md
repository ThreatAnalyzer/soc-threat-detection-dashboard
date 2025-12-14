# 🚨 SOC Threat Detection Dashboard

## 📌 Project Overview
This project simulates a Security Operations Center (SOC) threat detection dashboard that analyzes authentication activity to identify brute-force login attacks.

The dashboard detects repeated failed login attempts from the same IP address and raises high-severity security alerts.

---

## 🛡️ Attack Scenario
An attacker attempts to gain unauthorized access by repeatedly guessing passwords for valid user accounts.  
This behavior is commonly observed in brute-force and credential-stuffing attacks.

---

## 🔍 Detection Logic
- Authentication attempts are analyzed
- Failed login attempts are counted per IP address
- If failed attempts are **greater than or equal to 5** from the same IP, the activity is flagged
- A **HIGH severity alert** is generated for suspected brute-force attacks

---

## 🎯 MITRE ATT&CK Mapping (STEP 4.1)

This project maps detected malicious activity to the MITRE ATT&CK framework, which is widely used by SOC teams for threat classification.

- **Tactic:** Credential Access  
- **Technique:** Brute Force  
- **Technique ID:** **T1110**  
- **Description:** Adversaries attempt multiple password combinations to gain unauthorized access to accounts.

---

## 🧰 Tools & Technologies
- HTML
- CSS
- JavaScript
- SOC Detection Logic
- MITRE ATT&CK Framework

---

## 🚀 Skills Demonstrated (STEP 4.2)
- SOC threat detection and alerting
- Authentication log analysis
- Brute-force attack identification
- Blue Team defensive techniques
- Mapping attacks to MITRE ATT&CK
- Security-focused dashboard development

---

## ⚠️ Disclaimer
This project uses simulated authentication log data for educational and demonstration purposes only.
