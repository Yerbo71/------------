import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        surname: "",
        name: "",
        email: "",
        birthdate: "",
        password: "",
        repassword: "",
    });

    const [errors, setErrors] = useState({
        surname: "",
        name: "",
        email: "",
        birthdate: "",
        password: "",
        repassword: "",
    });

    const validateName = (name) => {
        if (!name) {
            return "Name is required";
        } else if (!/^[a-zA-Zа-яА-Я]+$/.test(name)) {
            return "Name can only contain letters";
        } else if (name.length > 30) {
            return "Name should be less than 30 characters";
        }
        return "";
    };

    const validateEmail = (email) => {
        if (!email) {
            return "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return "Invalid email format";
        }
        return "";
    };

    const validatePassword = (password) => {
        if (!password) {
            return "Password is required";
        } else if (password.length < 8) {
            return "Password should be at least 8 characters long";
        } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])/.test(password)) {
            return "Password should contain at least one digit, one uppercase letter, one lowercase letter, and one special character";
        }
        return "";
    };

    const validateAge = (birthdate) => {
        const today = new Date();
        const birthDate = new Date(birthdate);
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            return age - 1;
        }
        return age;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!Object.values(errors).some((error) => error !== "")) {
            console.log("Form submitted:", data);
            navigate("/home")
        } else {
            console.log("Form contains errors. Please correct them before submitting.");
        }
    };

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        if (name === "name") {
            setErrors((prevErrors) => ({ ...prevErrors, name: validateName(value) }));
        } else if (name === "surname") {
            setErrors((prevErrors) => ({ ...prevErrors, surname: validateName(value) }));
        } else if (name === "email") {
            setErrors((prevErrors) => ({ ...prevErrors, email: validateEmail(value) }));
        } else if (name === "birthdate") {
            const age = validateAge(value);
            if (age < 18) {
                setErrors((prevErrors) => ({ ...prevErrors, birthdate: "You must be at least 18 years old" }));
            } else {
                setErrors((prevErrors) => ({ ...prevErrors, birthdate: "" }));
            }
        } else if (name === "password") {
            setErrors((prevErrors) => ({ ...prevErrors, password: validatePassword(value) }));
            if (data.repassword && data.repassword !== value) {
                setErrors((prevErrors) => ({ ...prevErrors, repassword: "Passwords do not match" }));
            }
        } else if (name === "repassword") {
            if (data.password !== value) {
                setErrors((prevErrors) => ({ ...prevErrors, repassword: "Passwords do not match" }));
            } else {
                setErrors((prevErrors) => ({ ...prevErrors, repassword: "" }));
            }
        }
    };

    const isValid = Object.values(errors).every((error) => error === "") &&
        Object.values(data).every(value => value !== "") &&
        errors.birthdate === "";


    return (
        <div>
            <section className="bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                                Registration
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="surname" className="block mb-2 text-sm font-medium text-white">Surname</label>
                                    <input type="text" name="surname" id="surname" value={data.surname} onChange={handleOnChange} className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Brown" required=""/>
                                    {errors.surname && <p className="text-red-500">{errors.surname}</p>}
                                </div>
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Name</label>
                                    <input type="text" name="name" id="name" value={data.name} onChange={handleOnChange} className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Jack" required=""/>
                                    {errors.name && <p className="text-red-500">{errors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                                    <input type="email" name="email" id="email" value={data.email} onChange={handleOnChange} className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@company.com" required=""/>
                                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                                </div>
                                <div>
                                    <label htmlFor="birthdate" className="block mb-2 text-sm font-medium text-white">Birthdate</label>
                                    <input type="date" name="birthdate" id="birthdate" value={data.birthdate} onChange={handleOnChange} className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required=""/>
                                    {errors.birthdate && <p className="text-red-500">{errors.birthdate}</p>}
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                                    <input type="password" name="password" id="password" value={data.password} onChange={handleOnChange} placeholder="••••••••" className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required=""/>
                                    {errors.password && <p className="text-red-500">{errors.password}</p>}
                                </div>
                                <div>
                                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-white">Confirm password</label>
                                    <input type="password" name="repassword" id="confirm-password" value={data.repassword} onChange={handleOnChange} placeholder="••••••••" className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required=""/>
                                    {errors.repassword && <p className="text-red-500">{errors.repassword}</p>}
                                </div>
                                <button type="submit" disabled={!isValid} className={`w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 ${!isValid ? 'cursor-not-allowed opacity-50' : 'hover:bg-blue-700 focus:ring-blue-800'}`}>Create an account</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Registration;
