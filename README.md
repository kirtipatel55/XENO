

---

# Mini CRM Application

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Mini CRM Application is a comprehensive customer relationship management tool designed to help businesses manage their interactions with current and potential customers. This application allows for efficient data ingestion, audience creation and segmentation, and campaign management.

## Features

- **Data Ingestion:** Easily import and manage customer data.
- **Campaign Management:** Create, schedule, and send marketing campaigns.
- **Audience Creation:** Define and manage target audiences.
- **Filtering and Segmentation:** Filter audiences based on various conditions to target specific groups.

## Technologies Used

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authorization:** Zod

## Setup and Installation

To get a local copy up and running, follow these simple steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/mini-crm-app.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd mini-crm-app
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Set up environment variables:**
    Create a `.env` file in the root directory and add your environment variables (e.g., database connection string).

5. **Run the application:**
    ```bash
    npm start
    ```

## Usage

1. **Data Ingestion:** Upload CSV or JSON files containing customer data through the application interface.
2. **Create Audience:** Use the audience creation tool to define specific customer segments.
3. **Send Campaigns:** Design and schedule marketing campaigns to be sent to selected audiences.
4. **Filter and Segment:** Apply various filters to segment your audience based on conditions such as demographics, behavior, and more.

## API Documentation

### Endpoints

- **/api/ingest**
  - `POST`: Ingest customer data.

- **/api/audiences**
  - `GET`: Retrieve all audiences.
  - `POST`: Create a new audience.

- **/api/audiences/:id**
  - `GET`: Retrieve a specific audience.
  - `PUT`: Update an existing audience.
  - `DELETE`: Delete an audience.

- **/api/campaigns**
  - `GET`: Retrieve all campaigns.
  - `POST`: Create a new campaign.

- **/api/campaigns/:id**
  - `GET`: Retrieve a specific campaign.
  - `PUT`: Update an existing campaign.
  - `DELETE`: Delete a campaign.

### Data Models

- **Customer**
  ```json
  {
    "name": "string",
    "email": "string",
    "phone": "string",
    "address": "string",
    ...
  }
  ```

- **Audience**
  ```json
  {
    "name": "string",
    "description": "string",
    "conditions": [ ... ]
  }
  ```

- **Campaign**
  ```json
  {
    "name": "string",
    "content": "string",
    "scheduledDate": "date",
    "audienceId": "string"
  }
  ```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

