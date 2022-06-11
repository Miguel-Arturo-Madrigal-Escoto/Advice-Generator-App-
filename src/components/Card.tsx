import { useEffect, useState } from 'react';
import { Slip } from '../fetch/adviceSlipModels';
import { adviceSlipFetch } from "../fetch/adviceSlipFetch";


export const Card = () => {

    const [ { advice, id }, setQuote ] = useState<Slip>({
        
    });

    const fetchQuote = async() => {
        const data = await adviceSlipFetch();
        setQuote(data);
    }

    useEffect(() => {
        fetchQuote();

    }, []);

    return (
        <div className="card__container">
            <div className="card__header">
                ADVICE #{ JSON.stringify(id) }
            </div>
            <div className="card__body">
                { advice }
            </div>
            <div className="card__footer">
                <img 
                    src="./assets/pattern-divider-mobile.svg"
                    alt="pattern divider img"
                />
            </div>
            <div 
                className="card__button"
                onClick={ fetchQuote } 
            >
                <img
                    src="./assets/icon-dice.svg"
                    alt="icon dice"
                />
            </div>
        </div>
    )
}