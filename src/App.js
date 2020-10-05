import React, { useState, Fragment } from 'react'
import YAML from 'yaml'
import './App.css'

function PropsTable({ propDefs, editProp }) {
  const [editingId, setEditingId] = useState(null)

  if (!propDefs.length) {
    return 'None'
  }

  return (
    <table>
      <tbody>
        {propDefs.map(propDef => {
          if (propDef.id === editingId) {
            return (
              <tr>
                <td>
                  <h3>Editing Prop</h3>
                  <PropEditor
                    prefilledValues={propDef}
                    onSubmit={editedFields => {
                      setEditingId(null)
                      editProp(propDef.id, editedFields)
                    }}
                  />
                </td>
              </tr>
            )
          }

          const {
            id,
            name,
            description,
            isRequired,
            default: defaultValue,
            notes,
            example
          } = propDef

          return (
            <tr>
              <td>
                <strong>{name}</strong>
                <br />
                <br />
                {description}
                <br />
                <br />
                <table>
                  <tbody>
                    <tr>
                      <td>Is required</td>
                      <td>{isRequired ? 'Yes' : 'No'}</td>
                    </tr>
                    <tr>
                      <td>Default</td>
                      <td>{defaultValue}</td>
                    </tr>
                    <tr>
                      <td>Notes</td>
                      <td>{notes}</td>
                    </tr>
                    <tr>
                      <td>Example</td>
                      <td>{example}</td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <button
                  onClick={() => {
                    setEditingId(id)
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function PropEditor({ prefilledValues, onSubmit }) {
  const [fieldValues, setFieldValues] = useState(
    prefilledValues || {
      name: '',
      description: '',
      isRequired: false,
      default: null,
      notes: null,
      example: null
    }
  )

  const updateFieldValue = (name, value) =>
    setFieldValues({ ...fieldValues, [name]: value })

  return (
    <form
      onSubmit={e => {
        onSubmit(fieldValues)
        e.preventDefault()
      }}
    >
      <table>
        <thead>
          <tr>
            <td></td>
            <td width="25%"></td>
            <td width="50%"></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              <small>The name of the prop.</small>
            </td>
            <td>
              <input
                type="text"
                value={fieldValues.name}
                onChange={e => updateFieldValue('name', e.target.value)}
              />
            </td>
            <td>{fieldValues.name}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>
              <small>Explain why it exists in one or two sentences max.</small>
            </td>
            <td>
              <textarea
                value={fieldValues.description}
                onChange={e => updateFieldValue('description', e.target.value)}
              />
            </td>
            <td>{fieldValues.description}</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>
              <small>
                Always required. One of these values (make sure you keep the
                formatting). If a Flow type use code style. Use a pipe for
                multiple types. Use React Component(s) not the Flow type. eg:
                <ul>
                  <li>Number</li>
                  <li>String</li>
                  <li>Boolean</li>
                  <li>String | Number</li>
                  <li>(someVal: number) => void</li>
                  <li>See Types / MyTypeName React Component(s)</li>
                </ul>
              </small>
            </td>
            <td>
              <input
                type="text"
                value={fieldValues.type}
                onChange={e => updateFieldValue('type', e.target.value)}
              />
            </td>
            <td>{fieldValues.type}</td>
          </tr>
          <tr>
            <td>Is Required</td>
            <td>
              <small>
                Does the component error or misbehave if this prop isn't
                provided?
              </small>
            </td>
            <td>
              <input
                type="checkbox"
                checked={fieldValues.isRequired}
                onChange={() =>
                  updateFieldValue('isRequired', !fieldValues.isRequired)
                }
              />
            </td>
            <td>{fieldValues.isRequired ? 'Yes' : 'No'}</td>
          </tr>
          <tr>
            <td>Default</td>
            <td>
              <small>Only for optional props. Can leave empty.</small>
            </td>
            <td>
              <input
                type="text"
                value={fieldValues.default}
                onChange={e => updateFieldValue('default', e.target.value)}
              />
            </td>
            <td>{fieldValues.default}</td>
          </tr>
          <tr>
            <td>Notes</td>
            <td>
              <small>
                Things the consumer should know before they use it. eg. "if you
                do not provide enough array items it will throw an error"
              </small>
            </td>
            <td>
              <textarea
                value={fieldValues.notes}
                onChange={e => updateFieldValue('notes', e.target.value)}
              />
            </td>
            <td>{fieldValues.notes}</td>
          </tr>
          <tr>
            <td>Example</td>
            <td>
              <small>
                Help the consumer quickly use the prop. eg. an example array of
                items
              </small>
            </td>
            <td>
              <textarea
                value={fieldValues.example}
                onChange={e => updateFieldValue('example', e.target.value)}
              />
            </td>
            <td>{fieldValues.example}</td>
          </tr>
        </tbody>
      </table>
      <button type="submit">Save</button>
    </form>
  )
}

function TypesTable({ typesDefs, editType }) {
  const [editingId, setEditingId] = useState(null)

  if (!typesDefs.length) {
    return 'None'
  }

  return (
    <table>
      <tbody>
        {typesDefs.map(typeDef => {
          if (typeDef.id === editingId) {
            return (
              <tr>
                <td>
                  <h3>Editing Type</h3>
                  <TypeEditor
                    prefilledValues={typeDef}
                    onSubmit={editedFields => {
                      setEditingId(null)
                      editType(typeDef.id, editedFields)
                    }}
                  />
                </td>
              </tr>
            )
          }

          const { id, name, description, value } = typeDef

          return (
            <tr>
              <td>
                <strong>{name}</strong>
                <br />
                <br />
                {description}
                <br />
                <br />
                <code>{value}</code>
                <br />
                <button
                  onClick={() => {
                    setEditingId(id)
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function TypeEditor({ prefilledValues, onSubmit }) {
  const [fieldValues, setFieldValues] = useState(
    prefilledValues || {
      name: '',
      description: '',
      value: ''
    }
  )

  const updateFieldValue = (name, value) =>
    setFieldValues({ ...fieldValues, [name]: value })

  return (
    <form
      onSubmit={e => {
        onSubmit(fieldValues)
        e.preventDefault()
      }}
    >
      <table>
        <thead>
          <tr>
            <td></td>
            <td width="25%"></td>
            <td width="50%"></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              <small>The name of the Flow type.</small>
            </td>
            <td>
              <input
                type="text"
                value={fieldValues.name}
                onChange={e => updateFieldValue('name', e.target.value)}
              />
            </td>
            <td>{fieldValues.name}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>
              <small>Explain why it exists in one or two sentences max.</small>
            </td>
            <td>
              <textarea
                value={fieldValues.description}
                onChange={e => updateFieldValue('description', e.target.value)}
              />
            </td>
            <td>{fieldValues.description}</td>
          </tr>
          <tr>
            <td>Value</td>
            <td></td>
            <td>
              <textarea
                className="code"
                value={fieldValues.value}
                onChange={e => updateFieldValue('value', e.target.value)}
              />
            </td>
            <td>
              <code>{fieldValues.value}</code>
            </td>
          </tr>
        </tbody>
      </table>
      <button type="submit">Save</button>
    </form>
  )
}

const formats = {
  json: 'json',
  yaml: 'yaml'
}

const FormatSelector = ({ selectedFormat, onChange }) => (
  <Fragment>
    <input
      type="radio"
      value={formats.json}
      checked={selectedFormat === formats.json}
      onChange={() => onChange(formats.json)}
    />{' '}
    JSON
    <input
      type="radio"
      value={formats.yaml}
      checked={selectedFormat === formats.yaml}
      onChange={() => onChange(formats.yaml)}
    />{' '}
    YAML
  </Fragment>
)

function sortAlphabetically(arr) {
  return arr.sort(({ name: nameA }, { name: nameB }) =>
    nameA.localeCompare(nameB)
  )
}

let fieldId = 0

function App() {
  const [aboutTab, setAboutTab] = useState({})
  const [usageTab, setUsageTab] = useState({})
  const [propDefs, setPropDefs] = useState([])
  const [typesDefs, setTypesDefs] = useState([])
  const [compatibilityTab, setCompatibilityTab] = useState({})
  const [importedData, setImportedData] = useState(null)
  const [importFormat, setImportFormat] = useState(formats.json)
  const [exportFormat, setExportFormat] = useState(formats.json)

  const editAboutTab = (name, value) =>
    setAboutTab(currentVal => ({
      ...currentVal,
      [name]: value
    }))

  const editUsageTab = (name, value) =>
    setUsageTab(currentVal => ({
      ...currentVal,
      [name]: value
    }))

  const editProp = (id, newFields) => {
    setPropDefs(currentVal =>
      sortAlphabetically(
        currentVal.map(propDef => {
          if (propDef.id === id) {
            return newFields
          }
          return newFields
        })
      )
    )
  }

  const editType = (id, newFields) => {
    setTypesDefs(currentVal =>
      sortAlphabetically(
        currentVal.map(propDef => {
          if (propDef.id === id) {
            return newFields
          }
          return newFields
        })
      )
    )
  }

  const editCompatibilityTab = (name, value) =>
    setCompatibilityTab(currentVal => ({
      ...currentVal,
      [name]: value
    }))

  const exportData = {
    aboutTab,
    usageTab,
    props: propDefs,
    types: typesDefs,
    compatibilityTab
  }

  return (
    <div className="App">
      <header>ZeroHeight Docs Generator</header>
      <br />
      <strong> NOTE:  </strong> When in doubt consult the current <a href="https://atomix.hexagonmining.com/"> Atomix documentation </a> for reference.
      <hr />
      <h2>About Tab</h2>
      <h3>(Required) What is my component?</h3>
      <p>
        A short paragraph explaining what the component is and what it is used
        for. Do not go into too much depth - just summarise it.
      </p>
      <p>
        eg. Checkbox is a interactive box that, when selected by the user, shows that a particular feature has been enabled or a particular option chosen.
      </p>
      <textarea
        value={aboutTab.what}
        onChange={e => editAboutTab('what', e.target.value)}
      />
      <h3>(Required) Why would I use this component?</h3>
      <p>Explain why and when someone might consume your new component.</p>
      <p>
        eg. Checkbox should be used in cases where multiple selection is the most obvious use case. In use cases where only one selection of a group is allowed, use the radio button component instead of the checkbox.
      </p>
      <textarea
        value={aboutTab.why}
        onChange={e => editAboutTab('why', e.target.value)}
      />
      <h3>What are the different types?</h3>
      <p>
        How does the component change functionality depending on props.
      </p>
      <p>
        eg. The checkbox has 2 style types, Round box and Square box.
      </p>
      <textarea
        value={aboutTab.types}
        onChange={e => editAboutTab('types', e.target.value)}
      />
      <h3>What are the different states?</h3>
      <p>
        Does the component change functionality or appearance if the "state"
        changes.
      </p>
      <p>
        eg. The checkbox component has different states: default, enabled, disabled, erroneous, loading
      </p>
      <textarea
        value={aboutTab.states}
        onChange={e => editAboutTab('states', e.target.value)}
      />
      <hr />
      <h2>Usage Tab</h2>
      <h3>Import</h3>
      <p>The 1 line of code to import your component as a consumer</p>
      <p>
        eg.{' '}
        <code>{`import MyComponent from 'atomix/molecules/MyComponent'`}</code>
      </p>
      <textarea
        className="code"
        value={usageTab.import}
        onChange={e => editUsageTab('import', e.target.value)}
      />
      <h3>Example</h3>
      <p>
        A minimal example of how to use the component. Similar to the sandbox
        but even slimmer.
      </p>
      <p>
        eg.{' '}
        <code>{`import React, { useState } from 'react'
import MyComponent from 'atomix/molecules/MyComponent'

const MyExampleComponent = () => {
  const [someState, setSomeState] = useState(false)

  return <MyComponent something={someState} />
}`}</code>
      </p>
      <textarea
        className="code"
        value={usageTab.example}
        onChange={e => editUsageTab('example', e.target.value)}
      />
      <hr />
      <h2>Required Props</h2>
      <PropsTable
        propDefs={propDefs.filter(({ isRequired }) => isRequired)}
        editProp={editProp}
      />
      <h2>Optional Props</h2>
      <PropsTable
        propDefs={propDefs.filter(({ isRequired }) => !isRequired)}
        editProp={editProp}
      />
      <h2>Add Prop</h2>
      <PropEditor
        onSubmit={fields =>
          setPropDefs(currentVal =>
            sortAlphabetically(
              currentVal.concat([{ ...fields, id: fieldId++ }])
            )
          )
        }
      />
      <hr />
      <h2>Flow Types</h2>
      <TypesTable typesDefs={typesDefs} editType={editType} />
      <h2>Add Flow Type</h2>
      <TypeEditor
        onSubmit={fields =>
          setTypesDefs(currentVal =>
            sortAlphabetically(
              currentVal.concat([{ ...fields, id: fieldId++ }])
            )
          )
        }
      />
      <hr />
      <h2>Compatibility</h2>
      <p>
        What testing have you done in browsers and devices? We strongly
        recommend you test on these browsers/devices:
      </p>
      <ul>
        <li>Chrome (macOS or Windows)</li>
        <li>Safari (macOS)</li>
        <li>Firefox (macOS or Windows)</li>
        <li>Edge (Windows - Chromium)</li>
        <li>Chrome for Android</li>
        <li>Safari (iOS)</li>
      </ul>
      <p>
        List only the ones you have tested and dont forget to specify the version tested.
        An example is shown below.
      </p>
      <p>
        Tested on:
        <ul>
        <li>Chrome 22.44.10 for Windows</li>
        <li>Safari 33.4 for macOS</li>
        <li>Firefox 44.54 for macOS and Windows</li>
      </ul>
        Compatibility:
        <ul>
        <li>Desktop</li>
        <li>Tablet</li>
        <li>Mobile</li>
        </ul>
       
      </p>
      <textarea
        className="code"
        value={compatibilityTab.value}
        onChange={e => editCompatibilityTab('value', e.target.value)}
      />
      <hr />
      <h2>Export</h2>
      <p>
        Export this JSON blob so other people can import it (eg. people
        converting it for ZeroHeight).
      </p>
      <p>It automatically updates.</p>
      <FormatSelector
        onChange={setExportFormat}
        selectedFormat={exportFormat}
      />
      <textarea
        value={
          exportFormat === formats.json
            ? JSON.stringify(exportData, '', '\t')
            : YAML.stringify(exportData)
        }
      />
      <hr />
      <h2>Import</h2>
      <p>Paste a JSON blob and it will fill in all of the fields above.</p>
      <FormatSelector
        onChange={setImportFormat}
        selectedFormat={importFormat}
      />
      <textarea onChange={e => setImportedData(e.target.value)} />
      <button
        onClick={() => {
          if (!importedData) return

          const importedResult =
            importFormat === formats.json
              ? JSON.parse(importedData)
              : YAML.parse(importedData)

          setAboutTab(importedResult.aboutTab)
          setUsageTab(importedResult.usageTab)
          setPropDefs(sortAlphabetically(importedResult.props))
          setTypesDefs(sortAlphabetically(importedResult.types))
          setCompatibilityTab(importedResult.compatibilityTab)
        }}
      >
        Apply
      </button>
    </div>
  )
}

export default App
