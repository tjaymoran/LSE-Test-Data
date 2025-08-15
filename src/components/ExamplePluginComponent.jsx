import React, {useCallback, useEffect, useRef, useState} from 'react'
import {
  client,
  useConfig,
  useElementColumns,
  useElementData, usePaginatedElementData, usePlugin
} from "@sigmacomputing/plugin";



import _ from 'lodash'



client.config.configureEditorPanel([
  {
    // configuring selection of data source
    name: "source",
    label: "Example Source",
    type: "element",
  },
  {
    name: "column",
    label: "Example Column",
    type: "column",
    source: "source",
    allowMultiple: false,
  }
]);


export function ExamplePluginComponent() {
  const [iframeHeight, setIframeHeight] = useState(window.innerHeight || 0)
  useEffect(() => {
    const updateIframeHeight = () => {
      const height = window.innerHeight; // Get iframe's viewport height
      setIframeHeight(height);
    };

    // Add an event listener for resizing the iframe
    window.addEventListener("resize", updateIframeHeight);

    // Initial height computation
    updateIframeHeight();

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", updateIframeHeight);
    };
  }, []);
  const config = useConfig();
  console.log('config', config)
  const sigmaColumns = useElementColumns(config['source']);
  console.log('columns', sigmaColumns)
  const sigmaData = useElementData(config.source);
  console.log('sigmaData', sigmaData)
  // will get 25k more rows if you call getSigmaData
  // const [sigmaData, getSigmaData] = usePaginatedElementData(config.source);
  if(sigmaData){
    return(
      <div>
        <div>Data in your Column</div>
        <div>{JSON.stringify(sigmaData[config['column']])}</div>
      </div>
    )
  } else {
    return (<div>loading or error...</div>)
  }
}