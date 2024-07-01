import React, { useState, useEffect } from 'react';
import { EmojiEmotions, Label, PermMedia, Room, Cancel } from '@material-ui/icons'; // Cancel icon ekledik

import "./share.css";

const Share = () => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [previewImage, setPreviewImage] = useState(null); // Önizleme için state
    const [selectedOption, setSelectedOption] = useState(null); // Seçili seçeneğin state'i
    const [contentItems, setContentItems] = useState([]); // Gönderi içeriği öğeleri
    const [locations, setLocations] = useState([]); // Konum verilerini saklamak için state

    useEffect(() => {
        fetchLocations();
    }, []);

    const fetchLocations = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Örnek API endpoint'i
            if (!response.ok) {
                throw new Error('Konum verileri alınamadı!');
            }
            const data = await response.json();
            // Örneğin sadece title bilgilerini alalım
            const locationTitles = data.map(item => item.title);
            setLocations(locationTitles);
        } catch (error) {
            console.error('Konum verileri alınırken hata oluştu:', error);
        }
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);

        // Dosya seçildiğinde önizleme oluştur
        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setPreviewImage(null);
        }
    };

    const handleRemoveImage = () => {
        setFile(null);
        setPreviewImage(null);
    };

    const handleOptionClick = (option) => {
        // Seçili seçenekler listesine ekleyelim, eğer zaten ekli ise kaldıralım
        setSelectedOption(option);
    };

    const handleAddContent = () => {
        if (selectedOption) {
            const value = getContentForOption(selectedOption);
            if (value.trim() !== '') {
                setContentItems([...contentItems, { type: selectedOption, value }]);
            }
        }
    };

    const handleShare = async () => {
        // Gönderi içeriği oluşturma
        let content = title;
        contentItems.forEach(item => {
            content += `\n\n${item.type}: ${item.value}`;
        });

        const formData = new FormData();
        formData.append('image', file);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('content', content); // Gönderi içeriği formData'ya ekle

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Görsel yükleme başarısız!');
            }

            console.log('Görsel yükleme başarılı!');
            // Başarılı durumda kullanıcıya bilgi verilebilir veya sayfa yenilenebilir

        } catch (error) {
            console.error('Görsel yükleme hatası:', error);
            // Hata durumunda kullanıcıya bilgi verilebilir
        }
    };

    // Seçeneğe göre önceden tanımlı içeriği döndüren fonksiyon
    const getContentForOption = (option) => {
        switch (option) {
            case 'tag':
                return '#psiolik';
            case 'location':
                // İlk örneği alalım
                return locations.length > 0 ? locations[0] : 'Location not available';
            case 'feelings':
                return '😊 Happy';
            default:
                return '';
        }
    };

    return (
        <div className="share">
            <div className="shareTop">
                <img src="./assets/person/4.jpeg" alt="" className='shareProfileImg'/>
                <input
                    type="text"
                    placeholder="What's in your mind Özgür"
                    className='shareInput'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                {previewImage && (
                    <div className="sharePreviewContainer">
                        <img src={previewImage} alt="Preview" className="sharePreviewImage" />
                        <Cancel className="sharePreviewCancel" onClick={handleRemoveImage} />
                    </div>
                )}
                {selectedOption === 'tag' && (
                        <span className="shareContentItem">{getContentForOption('tag')}</span>
                    )}
                  {selectedOption === 'location' && (
                        <span className="shareContentItem">{getContentForOption('location')}</span>
                    )} 
                     {selectedOption === 'feelings' && (
                        <span className="shareContentItem">{getContentForOption('feelings')}</span>
                    )}   
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <label htmlFor="file" className="shareOption">
                        <PermMedia className='shareIcon' htmlColor='tomato'/>
                        <span className="shareOptionText">Photo or Video</span>
                        <input
                            style={{ display: 'none' }}
                            type="file"
                            id="file"
                            accept=".png, .jpg, .jpeg"
                            onChange={handleFileChange}
                        />
                    </label>
                </div>
                <div className={`shareOptions ${selectedOption === 'tag' ? 'selected' : ''}`} onClick={() => handleOptionClick('tag')}>
                    <div className="shareOption">
                        <Label className='shareIcon' htmlColor='blue'/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    
                </div>
                <div className={`shareOptions ${selectedOption === 'location' ? 'selected' : ''}`} onClick={() => handleOptionClick('location')}>
                    <div className="shareOption">
                        <Room className='shareIcon' htmlColor='green'/>
                        <span className="shareOptionText">Location</span>
                    </div>
                </div>
                <div className={`shareOptions ${selectedOption === 'feelings' ? 'selected' : ''}`} onClick={() => handleOptionClick('feelings')}>
                    <div className="shareOption">
                        <EmojiEmotions className='shareIcon' htmlColor='goldenrod'/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                   
                </div>
                <button className="shareButton" onClick={handleAddContent}>Add</button>
                <hr className="shareHr" />
                <div className="shareContent">
                    {contentItems.map((item, index) => (
                        <div key={index} className="shareContentItem">
                            <strong>{item.type}</strong>: {item.value}
                        </div>
                    ))}
                </div>
                <button className="shareButton" onClick={handleShare}>Share</button>
            </div>
        </div>
    );
}

export default Share;
