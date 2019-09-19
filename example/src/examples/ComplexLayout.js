import React, { useCallback } from 'react'
import { Form, Button } from 'antd'
import FormBuilder from 'antd-form-builder'

export default Form.create()(({ form }) => {
  const handleSubmit = useCallback(
    evt => {
      evt.preventDefault()
      console.log('Submit: ', form.getFieldsValue())
    },
    [form],
  )
  const meta = {
    columns: 4,
    formItemLayout: {}, // Must set this for inline layout
    colon: true,
    fields: [
      {
        key: 'label1',
        colSpan: 4,
        render() {
          return (
            <h1 style={{ color: 'darkcyan' }}>
              Address
              <span style={{ color: '#555', fontSize: '14px', marginLeft: '15px' }}>
                YOUR INFORMATION IS PRIVATE
              </span>
            </h1>
          )
        },
      },
      { key: 'address', label: 'Address', colSpan: 4 },
      { key: 'address2', label: 'Address2', colSpan: 4 },
      { key: 'city', label: 'City', colSpan: 2 },
      { key: 'state', label: 'State' },
      { key: 'zip', label: 'Zip Code' },
      {
        key: 'label1',
        colSpan: 4,
        render() {
          return (
            <h1 style={{ color: 'darkcyan' }}>
              Bed &amp; Bath
              <span style={{ color: '#555', fontSize: '14px', marginLeft: '15px' }}>
                WHAT IS YOUR HOME LIKE?
              </span>
            </h1>
          )
        },
      },
      {
        key: 'homeType',
        label: 'Home Type',
        colSpan: 2,
        widget: 'select',
        initialValue: 'House',
        options: ['House', 'Apartment'],
      },
      {
        key: 'roomType',
        label: 'Room Type',
        colSpan: 2,
        widget: 'select',
        initialValue: 'Entire home/apt',
        options: ['Entire home/apt', 'Shared'],
      },
      {
        key: 'bedrooms',
        label: 'Bedrooms',
        colSpan: 2,
        widget: 'select',
        options: ['1 Bedroom', '2 Bedrooms'],
      },
      {
        key: 'bathrooms',
        label: 'Bathrooms',
        colSpan: 2,
        widget: 'select',
        options: ['1 Bathroom', '2 Bathrooms'],
      },
      {
        key: 'king',
        label: 'King',
        widget: 'number',
        widgetProps: { style: { width: '100%' } },
        initialValue: 0,
      },
      {
        key: 'queen',
        label: 'Queen',
        widget: 'number',
        widgetProps: { style: { width: '100%' } },
        initialValue: 0,
      },
      {
        key: 'full',
        label: 'Full',
        widget: 'number',
        widgetProps: { style: { width: '100%' } },
        initialValue: 0,
      },
      {
        key: 'twin',
        label: 'Twin',
        widget: 'number',
        widgetProps: { style: { width: '100%' } },
        initialValue: 0,
      },
    ],
  }

  return (
    <Form layout="vertical" onSubmit={handleSubmit}>
      <FormBuilder form={form} meta={meta} />
      <Form.Item>
        <Button htmlType="submit" type="primary" style={{ width: '100%' }}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
})
