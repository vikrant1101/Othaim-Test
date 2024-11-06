'use client';

import React, { useState, useEffect } from 'react';
import style from './index.module.scss';
import Button from '../Button';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function CookiePrivacy({ dataCookie }: any) {
    const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [error, setError] = useState(false);
    const data = dataCookie?.items[0]

    useEffect(() => {
        const cookieAgreed = document.cookie
            .split('; ')
            .find(row => row.startsWith('privacy-agreed='));

        if (!cookieAgreed) {
            setIsVisible(true);
        }
    }, []);

    const handleSave = async () => {
        if (!isPrivacyChecked) {
            setError(true);
            return;
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/storeCookie`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                value: isPrivacyChecked,
                name: 'privacy-agreed',
            }),
        });

        if (response.ok) {
            setIsVisible(false);
        } else {
            console.error('Failed to set cookies');
        }
    };

    const handleClose = () => setIsVisible(false);

    if (!isVisible) return null;

    return (
        <div className={style.cookiePolicy}>
            <div className={style.closeIcon} onClick={handleClose}>
                <span className="icon-close"></span>
            </div>

            <div className="containerXL">
                <div className="rowFlex alignItemsCenter">
                    <div className={` ${style.colLeft}`}>
                        <div className={style.cookiePolicyText}>
                            {data?.title && <h6>{data?.title}</h6>}
                            {documentToReactComponents(data?.description?.json)}
                        </div>
                    </div>
                    <div className={` ${style.colRight}`}>
                        <div className={style.agreeTop}>
                            <div className={`formLabel ${style.agreeText}`}>
                                {data?.checkboxText &&
                                    <>
                                        <input
                                            type="checkbox"
                                            id="privacyPolicy"
                                            name="privacyPolicy"
                                            checked={isPrivacyChecked}
                                            onChange={(e) => {
                                                setIsPrivacyChecked(e.target.checked);
                                                setError(false);
                                            }}
                                        />
                                        <label htmlFor="privacyPolicy" className={style.label}> {data?.checkboxText}</label>
                                    </>

                                }
                                {error && (
                                    <p className={style.errorText} >
                                        Please agree to the privacy policy.
                                    </p>
                                )}
                            </div>
                            <div>
                                {data?.button?.title &&
                                    <Button
                                        type="Button"
                                        label={data?.button?.title}
                                        varient={data?.button?.variant}
                                        className={style.btn}
                                        onClick={handleSave}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
