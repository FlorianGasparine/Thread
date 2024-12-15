"use client";

import { Button } from "@/components/ui/button";
import { ContentTextArea } from "@/components/ui/contentTextArea";
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  useZodForm,
} from "@/components/ui/form";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { z } from "zod";

const FormScheme = z.object({
  content: z.string().min(1).max(500),
});

export type WritePostFormType = z.infer<typeof FormScheme>;

type WritePostFormProps = {
  user: User;
  onSubmit: (values: WritePostFormType) => Promise<string | void>;
};

export const WritePostForm = ({ onSubmit }: WritePostFormProps) => {
  const form = useZodForm({
    schema: FormScheme,
  });
  const router = useRouter();

  return (
    <div className="w-full">
      <Form
        form={form}
        onSubmit={async (values) => {
          const url = await onSubmit(values);
          if (url) {
            router.push(url);
          }
        }}
      >
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <ContentTextArea {...field} rows={4} />
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex w-full justify-end">
          <Button size="sm">Post</Button>
        </div>
      </Form>
    </div>
  );
};
