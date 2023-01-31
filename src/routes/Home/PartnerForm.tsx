import * as React from 'react';
import { Box, Button, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2/Grid2';

function PartnerForm() {
  const roles = [
    {
      text: 'a distributor looking to integrate with conduit commerce'
    },
    {
      text: 'a consumer looking to integrate with conduit commerce'
    },
    {
      text: 'a developer looking to integrate with conduit commerce'
    },
  ]

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [website, setWebsite] = React.useState('');
  const [role, setRole] = React.useState('');

  const map: Record<string, Function> = {
    'name': setName,
    'email': setEmail,
    'phone': setPhone,
    'company': setCompany,
    'website': setWebsite,
    'role': setRole
  }

  const handleChange = (event: { target: { name: string; value: string; }; }) => {
    const name = event.target.name as string
    if (name in map)
      map[name](event.target.value as string);
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log({
      name, email, phone, company, website, role
    })
  }

  return (
    <Box sx={{ my: 15, mb: 20 }}>
      <Typography variant="h3" gutterBottom align="center">
        Want to learn more? <br />
        Let's Partner
      </Typography>


      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Grid container rowSpacing={5}>
          <Grid xs={12} sm={6} sx={{ pr: { sm: 10 } }}>
            <TextField
              id="name"
              label="Name"
              name="name"
              value={name}
              onChange={handleChange}
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid xs={12} sm={6} sx={{ pl: { sm: 10 } }}>
            <TextField
              id="email"
              label="Email"
              name="email"
              value={email}
              onChange={handleChange}
              variant="standard"
              fullWidth
            />
          </Grid>

          <Grid xs={12} sm={6} sx={{ pr: { sm: 10 } }}>
            <TextField
              id="phone"
              label="Phone Number"
              name="phone"
              value={phone}
              onChange={handleChange}
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid xs={12} sm={6} sx={{ pl: { sm: 10 } }}>
            <TextField
              id="company"
              label="Company Name"
              name="company"
              value={company}
              onChange={handleChange}
              variant="standard"
              fullWidth
            />
          </Grid>

          <Grid xs={12} sm={6} sx={{ pr: { sm: 10 } }}>
            <TextField
              id="website"
              label="Website"
              name="website"
              value={website}
              onChange={handleChange}
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid xs={12} sm={6} sx={{ pl: { sm: 10 } }}>
            <InputLabel id="role-label">I am</InputLabel>
            <Select
              labelId="role-label"
              id="role"
              name="role"
              value={role}
              label="Role"
              variant='standard'
              onChange={handleChange}
              fullWidth
            >
              {
                roles.map((role) => (
                  <MenuItem value={role.text} key={role.text}>{role.text}</MenuItem>
                ))
              }
            </Select>
          </Grid>

          <Grid xs={12} sm={6}>
            <Button type="submit" size="medium" variant="contained" color="warning" sx={{ px: 4 }}>
              Request a demo
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default PartnerForm;