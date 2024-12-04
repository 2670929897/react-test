//jsx就像是在写html的时候用js来写函数或者方法之类的，在html块中使用用js的时候要用大括号圈住
import './index.css'
import { useState } from 'react';

function App() {
    const [rows, setRows] = useState([{ name: '', phone: '' }]);

    const addRow = () => {
        setRows([...rows, { name: '', phone: '' }]);
    };

    const tableChange = (index, field, value) => {
        const newRows = rows.map((row, i) => {
            if (i === index) {
                return { ...row, [field]: value };
            }
            return row;
        });
        setRows(newRows);
    };

    return (
      <div>
        <div>
          <h1 className='title'>收集表</h1>
        </div>
        <div>
            <table className='table'>
              <tr>
                <th>姓名</th>
                <th>联系方式</th>
              </tr>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={index}>
                    <td>
                      <textarea
                        className='name'
                        placeholder='姓名'
                        value={row.name}
                        onChange={(e) => tableChange(index, 'name', e.target.value)}
                      />
                    </td>
                    <td>
                      <textarea
                        className='phone'
                        placeholder='联系方式'
                        value={row.phone}
                        onChange={(e) => tableChange(index, 'phone', e.target.value)}
                      />
                      </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={addRow}>添加新行</button>
        </div>
      </div>
    );
};

export default App;