import React, { useState } from "react";
import styles from "./FooterForm.module.scss";
import classNames from "classnames";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        newsletter: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className={styles.formGroup}>
        <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
        />
            </div>
            <div className={styles.checkboxGroup}>
                <input
                    type="checkbox"
                    name="newsletter"
                    id="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                />
                <label htmlFor="newsletter">
                    I would like to receive the newsletter.
                </label>
            </div>
            <button type="submit" className={classNames("main-btn", styles.submitButton)}>
                Submit
            </button>
        </form>
    );
}

export default ContactForm;
