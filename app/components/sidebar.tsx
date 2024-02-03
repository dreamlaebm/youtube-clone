import React, { PropsWithChildren } from 'react';

interface SidebarComponentProps extends PropsWithChildren<{}> {
  // You can add additional props here if needed
}

const SidebarComponent: React.FC<SidebarComponentProps> = ({ children }) => {
    return (
        <div className="flex flex-col">
            { children }
        </div>
    )
}

export default function(grow: number) {
    return (
        <div className={`grow-[${grow}] flex divide-x`}>
            <SidebarComponent>
                
            </SidebarComponent>
        </div>
    )
}