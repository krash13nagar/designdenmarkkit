import * as React from 'react';
import DenAutocomplete from '../autocomplete/autocomplete.component';
import DenCircularProgress from '../circularprogress/circularprogress.component';
import { DenDefautTextField } from '../defaulttextfield';
import DenInputLabel from '../inputlabel/inputlabel.component';
import style from './asyncautocomplete.module.scss';
import { DenAutoCompleteProps } from './asyncautocomplete.types';
/**
 *
 * @param prop.option   the option list, must content title field in each rows
 * @returns
 */

export default function AsyncAutoComplete(props: DenAutoCompleteProps) {
  const {
    wrapperClass = style['wrapperClass'],
    labelClass = style['label-wrapper'],
    id = 'asynchronous-demo',
    timeOut = 10000,
    label = 'AutoComplete',
    classes = {},
  } = props;
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<readonly any[]>([]);
  const [loading, setLoading] = React.useState(open && options.length === 0);

  React.useEffect(() => {
    let timer: null | NodeJS.Timeout = null;
    if (loading) {
      timer = setTimeout(() => {
        setLoading(false);
      }, timeOut);
    }
    return () => {
      clearTimeout(timer);
      timer = null;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <div className={wrapperClass}>
      <DenInputLabel shrink htmlFor={id} className={labelClass}>
        {label}
      </DenInputLabel>
      <DenAutocomplete
        id={id}
        multiple
        open={open}
        onOpen={() => {
          setOpen(true);
          setLoading(true);
        }}
        onClose={() => {
          setOpen(false);
          setLoading(false);
        }}
        getOptionLabel={(option) => option.title}
        options={options}
        loading={loading}
        renderInput={(params) => (
          <DenDefautTextField
            InputLabelProps={{
              ...params.InputLabelProps,
              shrink: true,
            }}
            {...params}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <DenCircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
              id: id,
            }}
          />
        )}
        classes={{
          root: style['denLabel'],
          inputRoot: style['denInput'],
          input: style['inputRef'],
          ...classes,
        }}
      />
    </div>
  );
}
