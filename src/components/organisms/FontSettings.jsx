import React from 'react'

const FontSettings = ({ fontSettings, setFontSettings }) => {
    const { size, weight, color } = fontSettings;
    return (
        <form style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor='font-size'>Size</label>
                <select name='font-size' value={size} onChange={(e) => setFontSettings({ ...fontSettings, size: e.target.value })}>
                    <option value={16}>16</option>
                    <option value={18}>18</option>
                    <option value={20}>20</option>
                    <option value={22}>22</option>
                    <option value={24}>24</option>
                </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor='font-weight'>Weight</label>
                <select name='font-weight' value={weight} onChange={(e) => setFontSettings({ ...fontSettings, weight: e.target.value })}>
                    <option value={500}>500</option>
                    <option value={600}>600</option>
                    <option value={700}>700</option>
                    <option value={800}>800</option>
                    <option value={900}>900</option>
                </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor='font-color'>Color</label>
                <select name='font-color' value={color} onChange={(e) => setFontSettings({ ...fontSettings, color: e.target.value })}>
                    <option value={'red'}>Red</option>
                    <option value={'blue'}>Blue</option>
                    <option value={'green'}>Green</option>
                    <option value={'black'}>Black</option>
                    <option value={'gray'}>Gray</option>
                </select>
            </div>
        </form>
    )
}

export default FontSettings