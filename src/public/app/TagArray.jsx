import React from 'react';
import Chip from 'material-ui/Chip';

const TagArray = (props) => {
  const styles = {
    chip: {
      margin: 4,
    },
    wrapper: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  };

  function renderChip(tag, idx) {
    return (
      <Chip
        key={ idx }
        onRequestDelete={
          props.handleTagDelete
          ? () => props.handleTagDelete(tag, props.question)
          : null
        }
        className="tag-chip"
        style={ styles.chip }
       >
        { tag }
      </Chip>
    );
  }

  function parseTags() {
    //console.log(props.tags, typeof props.tags)
    var tags;
    if (typeof props.tags === 'string') {
      tags = props.tags.split(',');
    } else {
      tags = props.tags;
    }

    return tags.map(renderChip);
  }

  return (
    <div style={ styles.wrapper }>
      { parseTags() }
    </div>
  );
};

export default TagArray;
