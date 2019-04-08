import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("ReferencesWidget", ({ widget }) => {
  const refType = widget.get('pageType');
  const count = widget.get('count') || 5;

  const references = Scrivito.getClass(refType).all().order('date', 'desc').take(count);


  /*if (!references.length) {
    return (
      <InPlaceEditingPlaceholder center={ true }>
        Add a reference to another page in widget properties.
      </InPlaceEditingPlaceholder>
    );
  }*/

  return (

    <div className="d-flex flex-row flex-wrap">
    {[...references].map((item, index) => (

      <div key={index}>
      <Scrivito.LinkTag to={item}>
      {item.get('title') && <h3 className="h4">{item.get('title')}</h3> }
      {item.get('titleImage') && <Scrivito.ImageTag content={item.get('titleImage')} alt='Image'
      style={{width:"330px", marginRight:'12px'}}/> }
      </Scrivito.LinkTag>
      </div>
    ))}
    </div>
    );
    }
);




