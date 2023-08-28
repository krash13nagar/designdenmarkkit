/* eslint-disable react/prop-types */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiPaper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import copy from 'clipboard-copy';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import { debounce } from '@mui/material/utils';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { Index as FlexSearchIndex } from 'flexsearch';
import SearchIcon from '@mui/icons-material/Search';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import * as mui from '../../assets/cdsicons';

const allIconsList = mui;

const UPDATE_SEARCH_INDEX_WAIT_MS = 220;

function selectNode(node) {
  // Clear any current selection
  const selection = window.getSelection();
  selection.removeAllRanges();

  // Select code
  const range = document.createRange();
  range.selectNodeContents(node);
  selection.addRange(range);
}

const StyledIcon = styled('span')(({ theme }) => ({
  display: 'inline-flex',
  flexDirection: 'column',
  color: theme.palette.text.secondary,
  margin: '0 4px',
  '& > div': {
    display: 'flex',
  },
  '& > div > *': {
    flexGrow: 1,
    fontSize: '.6rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'center',
    width: 0,
  },
}));

// const StyledSvgIcon = styled(SvgIcon)(({ theme }) => ({
//   boxSizing: 'content-box',
//   cursor: 'pointer',
//   borderRadius: theme.shape.borderRadius,
//   transition: theme.transitions.create(['background-color', 'box-shadow'], {
//     duration: theme.transitions.duration.shortest,
//   }),
//   padding: theme.spacing(2),
//   margin: theme.spacing(0.5, 0),
//   '&:hover': {
//     backgroundColor: theme.palette.background.paper,
//     boxShadow: theme.shadows[1],
//   },
// }));

const Icons = React.memo(function Icons({ icons, handleOpenClick, iconProps }) {
  const handleIconClick = () => () => {};

  const handleLabelClick = (event) => {
    selectNode(event.currentTarget);
  };

  return (
    <div>
      {icons.map((icon) => {
        const IconComp = icon.Component;
        return (
          <StyledIcon key={icon.importName} onClick={handleIconClick}>
            {/* <StyledSvgIcon
              component={icon.Component}
              fontSize="large"
              tabIndex={-1}
              onClick={handleOpenClick}
              title={icon.importName}
              {...iconProps}
            /> */}
            <IconComp
              fontSize="large"
              tabIndex={-1}
              onClick={handleOpenClick}
              title={icon.importName}
              sx={[
                (theme) => ({
                  boxSizing: 'content-box',
                  cursor: 'pointer',
                  borderRadius: theme.shape.borderRadius,
                  // transition: theme.transitions.create(
                  //   ['background-color', 'box-shadow'],
                  //   {
                  //     duration: theme.transitions.duration.shortest,
                  //   }
                  // ),
                  padding: theme.spacing(2),
                  margin: theme.spacing(0.5, 0),
                  '&:hover': {
                    backgroundColor: theme.palette.background.paper,
                    boxShadow: theme.shadows[1],
                  },
                }),
              ]}
              {...iconProps}
            />
            <div>
              <Box
                sx={{ fontSize: '10px', fontWeight: 'bold' }}
                onClick={handleLabelClick}
              >
                {icon.importName}
              </Box>
            </div>
          </StyledIcon>
        );
      })}
    </div>
  );
});

const Title = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  cursor: 'pointer',
  transition: theme.transitions.create('background-color', {
    duration: theme.transitions.duration.shortest,
  }),
  '&:hover': {
    backgroundColor: '#96c6fd80',
  },
}));

const CanvasComponent = styled(Box)(({ theme }) => ({
  fontSize: 210,
  marginTop: theme.spacing(2),
  color: theme.palette.text.primary,
  backgroundSize: '30px 30px',
  backgroundColor: 'transparent',
  backgroundPosition: '0 0, 0 15px, 15px -15px, -15px 0',
  backgroundImage:
    theme.palette.mode === 'light'
      ? 'linear-gradient(45deg, #e6e6e6 25%, transparent 25%), linear-gradient(-45deg, #e6e6e6 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e6e6e6 75%), linear-gradient(-45deg, transparent 75%, #e6e6e6 75%)'
      : 'linear-gradient(45deg, #595959 25%, transparent 25%), linear-gradient(-45deg, #595959 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #595959 75%), linear-gradient(-45deg, transparent 75%, #595959 75%)',
}));

const FontSizeComponent = styled('span')(({ theme }) => ({
  margin: theme.spacing(2),
}));

const ContextComponent = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'contextColor',
})(({ theme, contextColor }) => ({
  margin: theme.spacing(0.5),
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  boxSizing: 'content-box',
  ...(contextColor === 'primary' && {
    color: theme.palette.primary.main,
  }),
  ...(contextColor === 'primaryInverse' && {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  }),
  ...(contextColor === 'textPrimary' && {
    color: theme.palette.text.primary,
  }),
  ...(contextColor === 'textPrimaryInverse' && {
    color: theme.palette.background.paper,
    backgroundColor: theme.palette.text.primary,
  }),
  ...(contextColor === 'textSecondary' && {
    color: theme.palette.text.secondary,
  }),
  ...(contextColor === 'textSecondaryInverse' && {
    color: theme.palette.background.paper,
    backgroundColor: theme.palette.text.secondary,
  }),
}));

const DialogDetails = React.memo(function DialogDetails(props) {
  const { open, selectedIcon, handleClose } = props;

  const [copied1, setCopied1] = React.useState(false);
  const [copied2, setCopied2] = React.useState(false);

  const handleClick = (tooltip) => async (event) => {
    await copy(event.currentTarget.textContent);
    const setCopied = tooltip === 1 ? setCopied1 : setCopied2;

    setCopied(true);
  };

  return (
    <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
      {selectedIcon ? (
        <React.Fragment>
          <DialogTitle>
            <Tooltip
              placement="right"
              title={copied1 ? 'copied' : 'clickToCopy'}
              TransitionProps={{
                onExited: () => setCopied1(false),
              }}
            >
              <Title
                component="span"
                variant="inherit"
                onClick={handleClick(1)}
                sx={{ p: 1 }}
              >
                {selectedIcon.importName}
              </Title>
            </Tooltip>
          </DialogTitle>
          <Tooltip
            title={copied2 ? 'Copied' : 'Click To Copy'}
            TransitionProps={{ onExited: () => setCopied2(false) }}
          >
            <Title onClick={handleClick(2)} sx={{ mx: '20px', p: 1 }}>
              {`import ${selectedIcon.importName}Icon from '{path-to-icons-folder}/${selectedIcon.importName}';`}
            </Title>
          </Tooltip>
          <DialogContent>
            <Grid container>
              <Grid item xs>
                <Grid container justifyContent="center">
                  <CanvasComponent component={selectedIcon.Component} />
                </Grid>
              </Grid>
              <Grid item xs>
                <Grid container alignItems="flex-end" justifyContent="center">
                  <Grid item>
                    <Tooltip title="fontSize small">
                      <FontSizeComponent
                        as={selectedIcon.Component}
                        fontSize="small"
                      />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="fontSize medium">
                      <FontSizeComponent as={selectedIcon.Component} />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="fontSize large">
                      <FontSizeComponent
                        as={selectedIcon.Component}
                        fontSize="large"
                      />
                    </Tooltip>
                  </Grid>
                </Grid>
                <Grid container justifyContent="center">
                  <ContextComponent
                    component={selectedIcon.Component}
                    contextColor="primary"
                  />
                  <ContextComponent
                    component={selectedIcon.Component}
                    contextColor="primaryInverse"
                  />
                </Grid>
                <Grid container justifyContent="center">
                  <ContextComponent
                    component={selectedIcon.Component}
                    contextColor="textPrimary"
                  />
                  <ContextComponent
                    component={selectedIcon.Component}
                    contextColor="textPrimaryInverse"
                  />
                </Grid>
                <Grid container justifyContent="center">
                  <ContextComponent
                    component={selectedIcon.Component}
                    contextColor="textSecondary"
                  />
                  <ContextComponent
                    component={selectedIcon.Component}
                    contextColor="textSecondaryInverse"
                  />
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>{'Close'}</Button>
          </DialogActions>
        </React.Fragment>
      ) : (
        <div />
      )}
    </Dialog>
  );
});

const Form = styled('form')({
  position: 'sticky',
  top: 80,
});

const Paper = styled(MuiPaper)(({ theme }) => ({
  position: 'sticky',
  top: 25,
  padding: '2px 4px',
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  width: '100%',
  borderRadius: '12px',
  border: '1px solid',
  borderColor: theme.palette.divider,
}));

function formatNumber(value) {
  return new Intl.NumberFormat('en-US').format(value);
}

const Input = styled(InputBase)({
  marginLeft: 8,
  flex: 1,
});

const searchIndex = new FlexSearchIndex({
  tokenize: 'full',
});

const allIconsMap = {};
const allIcons = Object.keys(mui)
  .sort()
  .map((importName) => {
    let theme;
    if (importName.indexOf('Outlined') !== -1) {
      theme = 'Outlined';
    } else if (importName.indexOf('Rounded') !== -1) {
      theme = 'Rounded';
    } else {
      theme = 'All';
    }

    const name = importName.replace(/(Outlined|Rounded)$/, '');
    let searchable = name;
    // if (synonyms[searchable]) {
    //   searchable += ` ${synonyms[searchable]}`;
    // }
    searchIndex.addAsync(importName, searchable);

    const icon = {
      importName,
      name,
      theme,
      Component: allIconsList[importName],
    };
    allIconsMap[importName] = icon;
    return icon;
  });

/**
 * Returns the last defined value that has been passed in [value]
 */
function useLatest(value) {
  const latest = React.useRef(value);
  React.useEffect(() => {
    if (value !== undefined && value !== null) {
      latest.current = value;
    }
  }, [value]);
  return value ?? latest.current;
}

const SearchIcons = (props) => {
  const [keys, setKeys] = React.useState(null);
  const [theme, setTheme] = React.useState('All');
  const [selectedIcon, setSelectedIcon] = React.useState('');
  const [query, setQuery] = React.useState('');

  const handleOpenClick = React.useCallback(
    (event) => {
      setSelectedIcon(event.currentTarget.getAttribute('title'));
    },
    [setSelectedIcon]
  );

  const handleClose = React.useCallback(() => {
    setSelectedIcon('');
  }, [setSelectedIcon]);

  const updateSearchResults = React.useMemo(
    () =>
      debounce((value) => {
        if (value === '') {
          setKeys(null);
        } else {
          searchIndex.searchAsync(value, { limit: 3000 }).then((results) => {
            setKeys(results);
          });
        }
      }, UPDATE_SEARCH_INDEX_WAIT_MS),
    []
  );

  React.useEffect(() => {
    updateSearchResults(query);
    return () => {
      updateSearchResults.clear();
    };
  }, [query, updateSearchResults]);

  const icons = React.useMemo(
    () =>
      (keys === null ? allIcons : keys.map((key) => allIconsMap[key])).filter(
        (icon) => theme === icon.theme
      ),
    [theme, keys]
  );

  const dialogSelectedIcon = useLatest(
    selectedIcon ? allIconsMap[selectedIcon] : null
  );

  return (
    <Grid container sx={{ minHeight: 500, my: 2 }}>
      <Grid item xs={12} sm={3}>
        <Form>
          <Typography fontWeight={500} sx={{ mb: 1 }}>
            Filter the style
          </Typography>
          <RadioGroup>
            {['All', 'Outlined', 'Rounded'].map((currentTheme) => {
              return (
                <FormControlLabel
                  key={currentTheme}
                  control={
                    <Radio
                      size="small"
                      checked={theme === currentTheme}
                      onChange={() => setTheme(currentTheme)}
                      value={currentTheme}
                    />
                  }
                  label={currentTheme}
                />
              );
            })}
          </RadioGroup>
        </Form>
      </Grid>
      <Grid item xs={12} sm={9}>
        <Paper>
          <IconButton sx={{ padding: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search Icons..."
            inputProps={{ 'aria-label': 'search icons' }}
          />
        </Paper>
        <Typography sx={{ mb: 1 }}>{`${formatNumber(
          icons.length
        )} matching results`}</Typography>
        <Icons
          icons={icons}
          handleOpenClick={handleOpenClick}
          iconProps={props}
        />
      </Grid>
      <DialogDetails
        open={!!selectedIcon}
        selectedIcon={dialogSelectedIcon}
        handleClose={handleClose}
      />
    </Grid>
  );
};

export default SearchIcons;
