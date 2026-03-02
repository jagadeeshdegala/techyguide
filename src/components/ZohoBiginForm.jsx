import { useState, useEffect } from 'react';
import '../styles/ZohoBiginForm.css';

function ZohoBiginForm() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Prevent body scroll when modal is open
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <>
            {/* Proposal Section with iframe */}
            <section className="zoho-proposal-section section-block section-light-gradient">
                <div className="zoho-container section-container">
                    <div className="zoho-header">
                        <h2>Get a Proposal for Your School</h2>
                        <p className="zoho-subtitle">
                            Share your requirements and let our expert team create a customized proposal with TeBot kits tailored for your institution.
                        </p>
                    </div>

                    {/* Request Proposal Button */}
                    <div className="zoho-button-container">
                        <button 
                            className="request-proposal-btn" 
                            onClick={openModal}
                            aria-label="Open proposal request form"
                        >
                            📋 Request Proposal
                        </button>
                    </div>

                    {/* Embedded iframe for direct form submission */}
                    <div className="zoho-form-wrapper">
                        <div className="zoho-form-container">
                            <iframe
                                src="https://in.bigin.online/org60029825901/forms/customer-enquiry-form"
                                title="School Proposal Request Form - Zoho Bigin CRM"
                                className="zoho-iframe"
                                allowFullScreen
                                loading="lazy"
                                sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
                            >
                                <p>
                                    Your browser does not support iframes. Please visit our form directly at:{' '}
                                    <a 
                                        href="https://in.bigin.online/org60029825901/forms/customer-enquiry-form" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        Zoho Bigin CRM Form
                                    </a>
                                </p>
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal Popup Version */}
            {isModalOpen && (
                <div 
                    className="zoho-modal-overlay" 
                    onClick={handleBackdropClick}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                    aria-hidden={!isModalOpen}
                >
                    <div className="zoho-modal-content">
                        <div className="zoho-modal-header">
                            <h2 id="modal-title">Request a Proposal</h2>
                            <button
                                className="zoho-modal-close"
                                onClick={closeModal}
                                aria-label="Close proposal form"
                                type="button"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="zoho-modal-body">
                            <iframe
                                src="https://in.bigin.online/org60029825901/forms/customer-enquiry-form"
                                title="School Proposal Request Form in Modal - Zoho Bigin CRM"
                                className="zoho-modal-iframe"
                                allowFullScreen
                                loading="lazy"
                                sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
                            >
                                <p>
                                    Your browser does not support iframes. Please visit our form directly at:{' '}
                                    <a 
                                        href="https://in.bigin.online/org60029825901/forms/customer-enquiry-form" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        Zoho Bigin CRM Form
                                    </a>
                                </p>
                            </iframe>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ZohoBiginForm;
