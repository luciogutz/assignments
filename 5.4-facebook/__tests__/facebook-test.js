import React from "react"
import TestUtils from "react-addons-test-utils"
import FaceBook from "../js/facebook.js"




describe("FaceBook", ()=>{

  let facebookComponent = {}

  it("should have a <section> element", ()=>{

    const sectionElement = facebookComponent.refs.comment
    expect(sectionElement).toBeDefined()
  })
})
