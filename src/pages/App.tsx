import * as React from 'react';

//
export function Csr() { 
    return (
    <html>
        <head>
        <title>welcome</title>
        </head>
        <div id="root"></div>
        {(process.env.NODE_ENV === "develop") ? (
            <script type="module" src="/static/client.js"></script>
        ): (
            <script type="module" src="/public/static/client.js"></script>
        )}
    </html>
    );
}
/*
<script type="module" src="/public/static/client.js"></script>
*/
