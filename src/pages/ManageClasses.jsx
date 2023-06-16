import React, { useEffect, useState } from 'react';

const ManageClasses = () => {
    const [loadingClasses, setLoadingClasses] = useState(true)
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('https://triolingo-27485-abdur27485.vercel.app/classes')
            .then(res => res.json())
            .then(classes => {
                setLoadingClasses(false)
                setClasses(classes)
            })
    }, [])
    return (
        <div>
                {
                    classes.length
                }
        </div>
    );
};

export default ManageClasses;