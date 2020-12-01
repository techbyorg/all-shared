export const FRAGMENT_ORG_WITH_ORG_USER = `fragment orgWithOrgUser on Org {
  id
  slug
  orgUser {
    id
    userId
    orgId
    partners {
      nodes {
        id
        name
        data
      }
    }
    roleIds
    roles {
      nodes {
        id
        name
        priority
        permissions {
          nodes {
            sourceType
            sourceId
            permission
            value
          }
        }
      }
    }
  }
}
`
