import React from 'react';

export const ProductDescription = (props: { text: string }) => <details className="relative mt-4 group">
    <summary className="block">
        <div>
            <div className="prose max-w-none group-open:hidden">
                <p>
                    {props.text.slice(0, 150)}...
                </p>
            </div>

            <span
                className="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                Read More
              </span>
        </div>
    </summary>

    <div className="pb-6 prose max-w-none">
        {props.text}
    </div>
</details>;
