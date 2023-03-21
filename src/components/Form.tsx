import React, { useState } from 'react'

interface Person {
    name: string;
    email: string;
    message: string;
}

//props: Person

export default function Form() {

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw'
        }}>
            <div>
                <label>Name</label>
                <input type="text" />
            </div>
            <div>
                <label>Email</label>
                <input type="email" />
            </div>
            <div>
                <label>Message</label>
                <textarea />
            </div>
            <div>
                <button>Send</button>
            </div>
        </div>
    )
}
