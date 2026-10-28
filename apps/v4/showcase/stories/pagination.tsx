"use client"

import type { Story } from "@/showcase/types"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/styles/radix-baseui/ui/pagination"

export const pagination: Story = {
  args: { page: 2, ellipsis: true },
  argTypes: {
    page: { control: "range", min: 1, max: 3, label: "current page" },
    ellipsis: { control: "boolean" },
  },
  render: ({ page, ellipsis }) => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        {[1, 2, 3].map((n) => (
          <PaginationItem key={n}>
            <PaginationLink href="#" isActive={n === page}>
              {n}
            </PaginationLink>
          </PaginationItem>
        ))}
        {ellipsis && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
  code: ({ page }) =>
    `<Pagination>\n  <PaginationContent>\n    <PaginationItem>\n      <PaginationPrevious href="#" />\n    </PaginationItem>\n    <PaginationItem>\n      <PaginationLink href="#" isActive>${page}</PaginationLink>\n    </PaginationItem>\n    <PaginationItem>\n      <PaginationNext href="#" />\n    </PaginationItem>\n  </PaginationContent>\n</Pagination>`,
}
