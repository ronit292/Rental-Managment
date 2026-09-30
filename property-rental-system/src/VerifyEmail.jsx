import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

function VerifyEmail() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const verifyEmail = async () => {
            const token = searchParams.get("token");

            if (!token) {
                return;
            }

            try {
                await axios.get(
                    `http://localhost:5000/api/auth/verify-email?token=${token}`
                );

                navigate("/dashboard");

            } catch (error) {
                console.error("Verification failed:", error);
            }
        };

        verifyEmail();
    }, [searchParams, navigate]);

    return (
        <div>
            <h2>Verifying your email...</h2>
        </div>
    );
}

export default VerifyEmail;